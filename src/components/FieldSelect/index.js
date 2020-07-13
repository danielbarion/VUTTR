import React, { Component } from 'react'
import classNames from 'classnames'
import ReactSelect from 'react-select'
import PropTypes from 'prop-types'
import style from './style.module.css'

class FieldSelect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,
      selectedOption: props.selectedOption,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.selectedOption &&
      (!prevState.selectedOption ||
        nextProps.selectedOption.value !== prevState.selectedOption.value ||
        nextProps.selectedOption.label !== prevState.selectedOption.label)
    ) {
      return { selectedOption: nextProps.selectedOption }
    }

    return null
  }

  handleChange = (selectedOption) => {
    const { onChange, name } = this.props

    this.setState({ selectedOption })

    onChange({
      name,
      selected: selectedOption,
    })
  }

  handleFocus = () => {
    this.setState({ isFocused: true })
  }

  handleBlur = () => {
    this.setState({ isFocused: false })
  }

  render() {
    const {
      className,
      error,
      hint,
      success,
      label,
      options,
      blurInputOnSelect,
      isSearchable,
      isDisabled,
      placeholder,
      emptyLabel,
      selectId,
      async,
      ...rest
    } = this.props
    const { selectedOption, isFocused } = this.state

    const selectClasses = classNames(style.container, className, {
      [style.success]: success,
      [style.error]: error,
      [style.focused]: isFocused,
    })

    return (
      <div className={selectClasses}>
        {label && (
          <label className={style.label} htmlFor={selectId}>
            {label}
          </label>
        )}
        <ReactSelect
          id={selectId}
          instanceId={selectId}
          inputId={selectId}
          className={style.select}
          classNamePrefix="select"
          onChange={this.handleChange}
          defaultValue={selectedOption}
          value={selectedOption}
          options={options}
          blurInputOnSelect={blurInputOnSelect}
          isSearchable={isSearchable}
          placeholder={placeholder}
          isDisabled={isDisabled}
          noOptionsMessage={() => emptyLabel}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...rest}
        />

        <p className={style.supportText}>{error || hint}</p>
      </div>
    )
  }
}

FieldSelect.propTypes = {
  selectId: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  blurInputOnSelect: PropTypes.bool,
  error: PropTypes.string,
  hint: PropTypes.string,
  success: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  selectedOption: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape()]),
  placeholder: PropTypes.string,
  emptyLabel: PropTypes.string,
  async: PropTypes.bool,
}

FieldSelect.defaultProps = {
  selectId: `field-${Math.random().toString(36).substring(7)}`,
  blurInputOnSelect: true,
  isSearchable: false,
  isDisabled: false,
  error: null,
  hint: null,
  success: false,
  selectedOption: null,
  className: '',
  placeholder: 'Selecione',
  emptyLabel: 'nenhuma opção disponível',
  label: '',
  async: false,
  options: [],
}

export default FieldSelect
