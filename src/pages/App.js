import React, { useEffect } from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'
import NProgress from 'nprogress'
import { WrapComponentWithAppStateConsumer } from 'AppContext'
import Modal from 'components/Modal'
import Toast from 'components/Toast'
import 'css/reset.css'
import 'css/tokens.css'
import 'css/index.css'
import 'css/nprogress.css'

const NProgressInit = () => {
  /**
   * Prevent start NProgress in each page
   */
  if (NProgress && NProgress.settings && !NProgress.settings.initialized) {
    NProgress.configure({
      initialized: true, // Non-plugin option
      showSpinner: false,
      minimum: 0.35,
      speed: 350,
    })
  }
}

const App = ({ Component, pageProps, context }) => {
  const { modalClose, state } = context
  const { modalOpened, toastList } = state

  const handleRouteChangeStart = (url) => {
    context.setLastUrl(url)
    window.scrollTo({ top: 0 })
    NProgress.start()
  }

  const handleRouteChangeDone = () => {
    NProgress.done()
  }

  const RouterEventsInit = () => {
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeDone)
    Router.events.on('routeChangeError', handleRouteChangeDone)
  }

  const RouterEventsOff = () => {
    Router.events.off('routeChangeStart')
    Router.events.off('routeChangeComplete')
    Router.events.off('routeChangeError')
  }

  useEffect(() => {
    NProgressInit()
    RouterEventsInit()
    return RouterEventsOff()
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Modal onClose={modalClose} opened={modalOpened} />
      {toastList.map((toast) => (
        <Toast key={toast.id} title={toast.title} type={toast.type}>
          {toast.content}
        </Toast>
      ))}
    </>
  )
}
App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  pageProps: PropTypes.shape(),
  context: PropTypes.shape({
    setLastUrl: PropTypes.func,
  }).isRequired,
}

App.defaultProps = {
  pageProps: null,
}

export default WrapComponentWithAppStateConsumer(App)
