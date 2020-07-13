import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Typography from 'components/Typography'
import Button from 'components/Button'
import style from './style.module.css'

const FieldTag = ({ className, label, name, tags, setTags, placeholder, required }) => {
  const [inputValue, setInputValue] = useState('')

  const removeTag = (index) => {
    const newTags = [...tags]
    newTags.splice(index, 1)
    setTags([...newTags])
  }

  const handleOnChange = (event) => {
    const { value } = event.target
    setInputValue(value)
  }

  const inputKeyDown = (event) => {
    const { value } = event.target
    const { key } = event

    /**
     * Prevent submit form when input tags
     * is focused and we only want to add a new tag
     */
    if (key === 'Enter' && window) {
      const inputElement = document.querySelector(`.${style.input}`)

      if (document.activeElement === inputElement) {
        event.preventDefault()
      }
    }

    if (key === 'Enter' && value) {
      if (tags.find((tag) => tag.toLowerCase() === value.toLowerCase())) {
        return
      }
      setTags([...tags, value])
      setInputValue('')
    } else if (key === 'Backspace' && !value) {
      removeTag(tags.length - 1)
    }
  }

  const handleOnClick = () => {
    if (window) {
      const inputElement = document.querySelector(`.${style.input}`)
      inputElement.focus()
    }
  }

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div className={classNames(style.container, className)} onClick={handleOnClick}>
      <ul className={style.tags}>
        {tags.map((tag, index) => (
          <li key={tag} className={style.tag}>
            <Typography variant="body" element="span" className={style.tagLabel}>
              {tag}
            </Typography>
            <Button
              type="button"
              className={style.button}
              iconClassName={style.removeIcon}
              variant="quartiary"
              icon="Icon-Close-2px"
              iconSize="xs"
              onClick={() => removeTag(index)}
            />
          </li>
        ))}
        <li className={style.tagInput}>
          <label className={style.field} htmlFor={`field-${name}`}>
            {label && (
              <span className={style.label}>
                {label}
                {required ? <span className={style.required}>*</span> : null}
              </span>
            )}
            <input
              id={`field-${name}`}
              className={style.input}
              value={inputValue}
              type="text"
              onKeyDown={inputKeyDown}
              onChange={handleOnChange}
              placeholder={placeholder}
            />
          </label>
        </li>
      </ul>
    </div>
  )
}

FieldTag.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTags: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
}

FieldTag.defaultProps = {
  className: null,
  label: '',
  placeholder: '',
  required: false,
}

export default FieldTag
