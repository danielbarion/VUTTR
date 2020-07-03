import React from 'react'
import PropTypes from 'prop-types'

const AppContext = React.createContext()

export const WrapComponentWithAppStateConsumer = (Component) => (props) => (
  <AppContext.Consumer>
    {(context) => <Component {...props} context={context} />}
  </AppContext.Consumer>
)

export class AppStateProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      modalOpened: false,
      modalContent: null,
      modalUserMail: null,
      lastUrl: null,
      searchQuerie: '',
      toolsList: [],
    }
  }

  modalOpen = (content) => {
    this.setState({
      modalContent: content,
    })

    window.setTimeout(() => {
      this.setState({
        modalOpened: true,
      })
    }, 10) // timeout needed to perform css transitions
  }

  modalClose = () => {
    this.setState({ modalOpened: false })

    window.setTimeout(() => {
      this.setState({
        modalContent: null,
      })
    }, 200) // timeout needed to perform css transitions
  }

  setEmail = (email) => {
    this.setState({
      modalUserMail: email,
    })
  }

  setLastUrl = (url) => {
    this.setState({ lastUrl: url })
  }

  setSearchQuerie = (value) => {
    this.setState({ searchQuerie: value })
  }

  setToolsList = (toolsList) => {
    this.setState({ toolsList: [...toolsList] })
  }

  render() {
    const { children } = this.props
    const {
      modalOpened,
      modalContent,
      modalUserMail,
      lastUrl,
      searchQuerie,
      toolsList,
    } = this.state

    return (
      <AppContext.Provider
        value={{
          state: {
            modalOpened,
            modalContent,
            modalUserMail,
            lastUrl,
            searchQuerie,
            toolsList,
          },
          modalOpen: this.modalOpen,
          modalClose: this.modalClose,
          setEmail: this.setEmail,
          setLastUrl: this.setLastUrl,
          setSearchQuerie: this.setSearchQuerie,
          setToolsList: this.setToolsList,
        }}
      >
        {children}
      </AppContext.Provider>
    )
  }
}

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
