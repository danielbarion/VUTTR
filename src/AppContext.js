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
  const [modalTitle, setModalTitle] = useState(null)
  const [lastUrl, setLastUrl] = useState(null)
  const [searchQuerie, setSearchQuerie] = useState('')
  const [searchInTagsOnly, setSearchInTagsOnly] = useState(false)
  const [toolsList, setToolsList] = useState([])
  const [toastList, setToastList] = useState([])
  const [toastListAmount, setToastListAmount] = useState(null)

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

  const modalOpen = (content, title) => {
    setModalContent(content)

    if (title) {
      setModalTitle(title)
    } else {
      setModalTitle(title)
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

  const toogleToast = (id) => {
    const toast = toastList[id - 1]
    toast.showing = !toast.showing
    setToastList([...toastList])
  }

  /**
   * Add toast into toast's list
   * @param { Object } toastData
   */
  const addToast = (toastData) => {
    const lastId = toastList.length > 0 ? toastList[toastList.length - 1].id : 0
    const toastId = lastId + 1
    const toast = {
      ...toastData,
      id: toastId,
    }

    const newToastList = [...toastList, toast]

    setToastList(newToastList)
  }

  const removeToast = (id) => {
    const updatedToastList = toastList.filter((toast) => toast.id !== id)

    toogleToast(id)

    setTimeout(() => {
      setToastList([...updatedToastList])
    }, 200)
  }

  /**
   * When toastList updates
   * check if his length was changed
   * to prevent change object attrs and
   * trigger the toogleToast
   */
  useEffect(() => {
    if (toastList.length !== toastListAmount) {
      setToastListAmount(toastList.length)
    }
  }, [toastList])

  useEffect(() => {
    if (toastListAmount) {
      const lastToastOnList = toastList[toastList.length - 1]
      if (lastToastOnList.showing === false) {
        setTimeout(() => {
          toogleToast(lastToastOnList.id)
        }, 10)
      }
    }
  }, [toastListAmount])

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
          toastList,
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
        addToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
