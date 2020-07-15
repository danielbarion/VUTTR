import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Typography from 'components/Typography'
import style from './style.module.css'

const icons = {
  neutral: null,
  warning: 'Exclusion-5',
  error: 'Exclusion-2',
  success: 'Exclusion-3',
  info: 'Exclusion-7',
}

const Toast = ({
  className,
  type,
  children,
  title,
  closeButtonClassName,
  contentClassName,
  onClose,
  onAction,
  actionLabel,
  showing,
}) => {
  const isNeutralType = type === 'neutral'
  const containerClasses = classNames(style.container, style[type], {
    [style.neutral]: isNeutralType,
    [style.showing]: showing,
  })

  return (
    <div className={containerClasses}>
      {type !== 'neutral' && (
        <div className={style.typeIcon}>
          <Icon size="m" icon={icons[type]} />
        </div>
      )}
      <div className={classNames(style.toast, className)}>
        <div className={style.header}>
          <Typography className={style.title} variant="header4" element="div">
            {title}
          </Typography>

          <Button
            className={classNames(style.closeButton, closeButtonClassName)}
            variant="quartiary"
            icon="Icon-Close-2px"
            iconSize="xs"
            onClick={onClose}
          />
        </div>
        <Typography
          className={classNames(style.content, contentClassName, {
            [style.hasAction]: Boolean(onAction),
          })}
          variant="bodyS"
          element="div"
        >
          {children}
        </Typography>
        {onAction && (
          <div className={style.footer}>
            <Button
              label={actionLabel}
              variant="tertiary"
              className={style[`${type}Button`]}
              onClick={onAction}
            />
          </div>
        )}
      </div>
    </div>
  )
}

Toast.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(['neutral', 'success', 'warning', 'error', 'info']),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.object,
  ]),
  contentClassName: PropTypes.string,
  closeButtonClassName: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onAction: PropTypes.func,
  actionLabel: PropTypes.string,
  showing: PropTypes.bool,
}

Toast.defaultProps = {
  className: null,
  title: null,
  type: 'neutral',
  children: null,
  contentClassName: null,
  closeButtonClassName: null,
  onAction: null,
  actionLabel: null,
  showing: false,
}

export default Toast
