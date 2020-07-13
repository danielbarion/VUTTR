import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from 'components/Icon'
import style from './style.module.css'

const Button = ({
  className,
  icon,
  iconClassName,
  type,
  label,
  variant,
  display,
  onClick,
  disabled,
  bordered,
  element: ButtonElement,
  iconSize,
  ...rest
}) => {
  const buttonClassNames = classNames(style.button, style[variant], style[display], {
    [style.disabled]: disabled,
    [style.hasLabel]: Boolean(label),
  })

  return (
    <ButtonElement
      type={type}
      onClick={onClick}
      className={classNames(buttonClassNames, className)}
      disabled={disabled}
      {...rest}
    >
      {icon && (
        <Icon className={classNames(style.icon, iconClassName)} icon={icon} size={iconSize} />
      )}
      {label}
    </ButtonElement>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  display: PropTypes.oneOf(['neutral', 'success', 'danger']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quartiary']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  bordered: PropTypes.bool,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]),
  iconSize: PropTypes.oneOf(['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
}

Button.defaultProps = {
  className: null,
  icon: null,
  iconClassName: null,
  display: 'neutral',
  variant: 'primary',
  label: null,
  type: null,
  element: 'button',
  onClick: null,
  disabled: false,
  bordered: false,
  iconSize: 's',
}

export default Button
