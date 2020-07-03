import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AppContext = React.createContext()

export const WrapComponentWithAppStateConsumer = (Component) => (props) => (
  <AppContext.Consumer>
    {(context) => <Component {...props} context={context} />}
  </AppContext.Consumer>
)

export const AppStateProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [lastUrl, setLastUrl] = useState(null)
  const [searchQuerie, setSearchQuerie] = useState('')
  const [toolsList, setToolsList] = useState([])

  const modalOpen = (content) => {
    setModalContent(content)

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
        },
        modalOpen,
        modalClose,
        setLastUrl,
        setSearchQuerie,
        setToolsList,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
