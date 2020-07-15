import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { WrapComponentWithAppStateConsumer } from 'AppContext'
import Toast from 'components/Toast'
import style from './style.module.css'

const ToastContainer = ({ className, context }) => {
  const { state, removeToast } = context
  const { toastList } = state

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
  context: PropTypes.shape({
    state: PropTypes.shape({
      toastList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          type: PropTypes.string,
          content: PropTypes.string,
          showing: PropTypes.boolean,
        }),
      ),
    }),
    removeToast: PropTypes.func.isRequired,
  }).isRequired,
}

ToastContainer.defaultProps = {
  className: null,
}

export default WrapComponentWithAppStateConsumer(ToastContainer)
