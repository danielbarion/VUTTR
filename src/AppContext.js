import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useDebounce from 'utils/use-debounce'
import { getTools } from 'utils/api'

const AppContext = React.createContext()

export const WrapComponentWithAppStateConsumer = (Component) => (props) => (
  <AppContext.Consumer>
    {(context) => <Component {...props} context={context} />}
  </AppContext.Consumer>
)

export const AppStateProvider = ({ children }) => {
  const [appInitialized, setAppInitialized] = useState(false)
  const [isLoadingTools, setIsLoadingTools] = useState(true)
  const [modalOpened, setModalOpened] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [modalTitle, setModalTitle] = useState({ title: null, icon: null })
  const [lastUrl, setLastUrl] = useState(null)
  const [searchQuerie, setSearchQuerie] = useState('')
  const [searchInTagsOnly, setSearchInTagsOnly] = useState(false)
  const [toolsList, setToolsList] = useState([])

  const debouncedSearchQuerie = useDebounce(searchQuerie, 450)
  const debouncedSearchInTagsOnly = useDebounce(searchInTagsOnly, 450)

  const getToolsByQuerie = async () => {
    const initialTime = performance.now()

    setIsLoadingTools(true)

    const querie = searchInTagsOnly
      ? `tags_like=${debouncedSearchQuerie}`
      : `q=${debouncedSearchQuerie}`
    const { data } = await getTools(querie)

    setToolsList([...data])

    const lastTime = performance.now()

    // don't penalize users with low internet connection (time is in milliseconds)
    if (lastTime - initialTime >= 300) {
      setIsLoadingTools(false)
      return
    }

    // improve UX when the user has a very fast internet connection
    setTimeout(() => setIsLoadingTools(false), 300)
  }

  useEffect(() => {
    if (!appInitialized) {
      setAppInitialized(true)
    } else {
      getToolsByQuerie()
    }
  }, [debouncedSearchQuerie, debouncedSearchInTagsOnly])

  const modalOpen = (content, header) => {
    setModalContent(content)

    if (header) {
      setModalTitle(header)
    } else {
      setModalTitle({ title: null, icon: null })
    }

    window.setTimeout(() => {
      setModalOpened(true)
    }, 10) // timeout needed to perform css transitions
  }

  const modalClose = () => {
    setModalOpened(false)

    window.setTimeout(() => {
      setModalContent(null)
    }, 200) // timeout needed to perform css transitions
  }

  return (
    <AppContext.Provider
      value={{
        state: {
          modalOpened,
          modalContent,
          lastUrl,
          searchQuerie,
          toolsList,
          isLoadingTools,
          searchInTagsOnly,
          modalTitle,
        },
        modalOpen,
        modalClose,
        setLastUrl,
        setSearchQuerie,
        setToolsList,
        setIsLoadingTools,
        setSearchInTagsOnly,
        setModalTitle,
        getToolsByQuerie,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
