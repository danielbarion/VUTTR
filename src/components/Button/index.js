import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './style.module.css'

const Button = ({
  className,
  iconClassName,
  type,
  label,
  variant,
  display,
  onClick,
  disabled,
  bordered,
  element: ButtonElement,
  ...rest
}) => {
  const buttonClassNames = classNames(style.button, style[variant], style[display], {
    [style.bordered]: bordered,
    [style.disabled]: disabled,
  })

  return (
    <ButtonElement
      type={type}
      onClick={onClick}
      className={classNames(buttonClassNames, className)}
      disabled={disabled}
      {...rest}
    >
      {label}
    </ButtonElement>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  display: PropTypes.oneOf([
    'standard',
    'inline',
    'micro',
    'extended',
    'extendedMicro',
    'circular',
    'circularMicro',
  ]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'negative', 'primaryGradient']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  bordered: PropTypes.bool,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]),
}

Button.defaultProps = {
  className: null,
  iconClassName: null,
  display: 'standard',
  variant: 'primary',
  label: null,
  type: null,
  element: 'button',
  onClick: null,
  disabled: false,
  bordered: false,
}

export default Button
