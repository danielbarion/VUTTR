/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { WrapComponentWithAppStateConsumer } from 'AppContext'
import Button from 'components/Button'
import Typography from 'components/Typography'
import Icon from 'components/Icon'
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
  const { modalContent, modalTitle } = state
  const { title, icon } = modalTitle

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
        <div className={style.header}>
          <div className={style.title}>
            <Icon className={classNames(style.icon)} icon={icon} size="xs" />
            <Typography variant="header4">{title}</Typography>
          </div>

          <Button
            className={classNames(style.closeButton, closeButtonClassName)}
            variant="quartiary"
            icon="Icon-Close-2px"
            iconSize="xs"
            onClick={onClose}
          />
        </div>
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
      modalTitle: PropTypes.shape({
        title: PropTypes.string,
        icon: PropTypes.string,
      }),
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
