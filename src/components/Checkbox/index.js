import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Typography from 'components/Typography'
import style from './style.module.css'

const Checkbox = ({ className, labelClassName, type, value, onClick, label, disabled }) => {
  const handleKeyDown = (event) => {
    const switchValueKeys = [
      32, // Space
      13, // Enter
    ]

    if (switchValueKeys.includes(event.which)) {
      onClick()
    }
  }

  return (
    <div
      role="checkbox"
      tabIndex="0"
      onKeyDown={handleKeyDown}
      onClick={onClick}
      className={classNames(style.checkbox, className, { [style.checked]: value })}
      aria-checked={value}
      disabled={disabled}
    >
      {value ? (
        <span className={classNames(style.icon, 'material-icons')}>
          {type === 'checkbox' ? 'check_box' : 'radio_button_checked'}
        </span>
      ) : (
        <span className={classNames(style.icon, 'material-icons')}>
          {type === 'checkbox' ? 'check_box_outline_blank' : 'radio_button_unchecked'}
        </span>
      )}
      {label ? (
        <Typography
          variant="body"
          element="span"
          className={classNames(style.label, labelClassName)}
        >
          {label}
        </Typography>
      ) : null}
    </div>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  value: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['checkbox', 'radio']),
}

Checkbox.defaultProps = {
  className: null,
  labelClassName: null,
  label: null,
  disabled: false,
  type: 'checkbox',
}

export default Checkbox
