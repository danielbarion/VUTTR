import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { WrapComponentWithAppStateConsumer } from 'AppContext'
import Toast from 'components/Toast'
import style from './style.module.css'

const ToastContainer = ({ className, context }) => {
  const { state, addToast, removeToast } = context
  const { toastList } = state

  const addNewToast = () => {
    const toastTest = {
      title: 'lorem ipsum dolor sit amet',
      type: 'neutral',
      showing: false,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porta nunc, at posuere nulla.Ut sit amet dui non mi scelerisque commodo.Proin ullamcorper eros lacus',
    }

    addToast(toastTest)
  }

  useEffect(() => {
    addNewToast()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (toastList.length && toastList[0].showing === true) {
        removeToast(toastList[0].id)
      }
    }, 3500)
  }, [toastList])

  return (
    <div className={classNames(style.toastContainer, className)}>
      {toastList.map((toast) => (
        <Toast
          id={toast.id}
          key={toast.id}
          title={toast.title}
          type={toast.type}
          onClose={() => {
            removeToast(toast.id)
          }}
          showing={toast.showing}
        >
          {toast.content}
        </Toast>
      ))}
    </div>
  )
}

ToastContainer.propTypes = {
  className: PropTypes.string,
}

ToastContainer.defaultProps = {
  className: null,
}

export default WrapComponentWithAppStateConsumer(ToastContainer)
