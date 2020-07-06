import React from 'react'
import NextApp from 'next/app'
import { AppStateProvider } from 'AppContext'
import AppPage from 'pages/App'

class App extends NextApp {
  render() {
    return (
      <AppStateProvider>
        <AppPage {...this.props} />
      </AppStateProvider>
    )
  }
}

export default App
