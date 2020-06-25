/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { WrapComponentWithAppStateConsumer } from 'AppContext'
import Button from 'components/Button'
import style from './style.module.css'

const Modal = ({
  opened,
  blocked,
  onClose,
  className,
  wrapperClassName,
  contentClassName,
  closeButtonClassName,
  context,
}) => {
  const { state } = context
  const { modalContent } = state

  if (!modalContent) {
    return null
  }

  const handleCloseOverlay = (event) => {
    if (typeof event.target.className !== 'string') {
      return
    }

    if (event.target.className && event.target.className.includes(style.container) && !blocked) {
      onClose()
    }
  }

  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 27 && !blocked) {
        onClose()
      }
    },
    [onClose, blocked],
  )

  const containerClassNames = classNames(style.container, className, {
    [style.opened]: Boolean(opened),
  })

  useEffect(() => {
    if (!window) {
      return false
    }

    if (opened) {
      document.body.classList.add(style.scrollLocked)

      window.addEventListener('keydown', handleKeyDown)

      return () => window.removeEventListener('keydown', handleKeyDown)
    }

    return document.body.classList.remove(style.scrollLocked)
  }, [opened, handleKeyDown])

  return (
    <div
      className={containerClassNames}
      onClick={handleCloseOverlay}
      onKeyDown={handleKeyDown}
      role="dialog"
    >
      <div className={classNames(style.wrapper, wrapperClassName)}>
        <Button
          className={classNames(style.closeButton, closeButtonClassName)}
          prefixIcon="mono_cancel"
          type="button"
          display="circularMicro"
          variant="tertiary"
          icon="mono_cancel"
          onClick={onClose}
        />

        <div className={classNames(style.content, contentClassName)}>{modalContent}</div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  opened: PropTypes.bool,
  blocked: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  context: PropTypes.shape({
    state: PropTypes.shape({
      modalContent: PropTypes.element,
    }),
  }).isRequired,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  closeButtonClassName: PropTypes.string,
}

Modal.defaultProps = {
  opened: false,
  blocked: false,
  className: null,
  wrapperClassName: null,
  contentClassName: null,
  closeButtonClassName: null,
}

export default WrapComponentWithAppStateConsumer(Modal)
