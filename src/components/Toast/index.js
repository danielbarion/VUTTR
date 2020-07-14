import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from 'components/Button'
import Typography from 'components/Typography'
import style from './style.module.css'

const Toast = ({ className, type, children, title, closeButtonClassName, contentClassName }) => (
  <div className={classNames(style.toast, className, style[type])}>
    <div className={style.header}>
      <div className={style.title}>
        <Typography variant="header4" element="span">
          {title}
        </Typography>
      </div>

      <Button
        className={classNames(style.closeButton, closeButtonClassName)}
        variant="quartiary"
        icon="Icon-Close-2px"
        iconSize="xs"
        // onClick={onClose}
      />
    </div>
    <div className={classNames(style.content, contentClassName)}>{children}</div>
  </div>
)

Toast.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(['neutral', 'success', 'warning', 'error', 'informational']),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.object,
  ]),
  contentClassName: PropTypes.string,
  closeButtonClassName: PropTypes.string,
}

Toast.defaultProps = {
  className: null,
  title: null,
  type: 'neutral',
  children: null,
  contentClassName: null,
  closeButtonClassName: null,
}

export default Toast
