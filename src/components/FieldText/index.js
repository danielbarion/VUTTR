import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import style from './style.module.css'

class FieldText extends React.Component {
  constructor() {
    super()

    this.state = {
      focused: false,
    }
  }

  handleFocus = (e) => {
    const { onFocus } = this.props
    if (onFocus) {
      onFocus(e)
    }

    this.setState({ focused: true })
  }

  handleBlur = (e) => {
    const { onBlur } = this.props
    if (onBlur) {
      onBlur(e)
    }

    this.setState({ focused: false })
  }

  render() {
    const { focused } = this.state
    const {
      value,
      label,
      placeholder,
      name,
      type,
      hint,
      disabled,
      readOnly,
      required,
      error,
      onChange,
      prefixIcon,
      prefixIconPath,
      sufixIcon,
      sufixIconPath,
      onPrefixIconClick,
      onSufixIconClick,
      tabIndex,
      className,
    } = this.props

    const hasPrefixIcon = Boolean(prefixIcon || prefixIconPath)
    const hasSufixIcon = Boolean(sufixIcon || sufixIconPath)

    const containerClassNames = classNames(style.container, className, {
      [style.error]: Boolean(error),
      [style.focused]: Boolean(focused),
      [style.filled]: Boolean(value),
      [style.hasPlaceholder]: Boolean(placeholder),
      [style.disabled]: Boolean(disabled),
      [style.hasPrefixIcon]: hasPrefixIcon,
      [style.hasSufixIcon]: hasSufixIcon,
    })

    return (
      <div className={containerClassNames}>
        <label className={style.field} htmlFor={`field-${name}`}>
          {hasPrefixIcon ? (
            <Icon
              size="l"
              icon={prefixIcon}
              iconPath={prefixIconPath}
              className={classNames(style.prefixIcon, {
                [style.iconClickable]: Boolean(onPrefixIconClick),
              })}
              onClick={onPrefixIconClick}
            />
          ) : null}
          <input
            className={style.input}
            id={`field-${name}`}
            tabIndex={tabIndex}
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            onChange={onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />

          {label && (
            <span className={style.label}>
              {label}
              {required ? '*' : null}
            </span>
          )}
          {hasSufixIcon ? (
            <Icon
              size="l"
              icon={sufixIcon}
              iconPath={sufixIconPath}
              className={classNames(style.sufixIcon, {
                [style.iconClickable]: Boolean(onSufixIconClick),
              })}
              onClick={onSufixIconClick}
            />
          ) : null}
        </label>

        <p className={style.supportText}>{error || hint}</p>
      </div>
    )
  }
}

FieldText.propTypes = {
  className: PropTypes.string,
  tabIndex: PropTypes.number,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password', 'email', 'search']),
  prefixIcon: PropTypes.string,
  prefixIconPath: PropTypes.string,
  onPrefixIconClick: PropTypes.func,
  sufixIcon: PropTypes.string,
  sufixIconPath: PropTypes.string,
  onSufixIconClick: PropTypes.func,
}

FieldText.defaultProps = {
  className: null,
  tabIndex: null,
  type: 'text',
  label: '',
  placeholder: '',
  hint: null,
  disabled: false,
  readOnly: false,
  required: false,
  error: null,
  onFocus: null,
  onBlur: null,
  prefixIcon: null,
  prefixIconPath: null,
  onPrefixIconClick: null,
  sufixIcon: null,
  sufixIconPath: null,
  onSufixIconClick: null,
}

export default FieldText
