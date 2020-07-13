import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Typography from 'components/Typography'
import Button from 'components/Button'
import style from './style.module.css'

const FieldTag = ({ className }) => {
  const [tags, setTags] = React.useState(['Tags', 'Input'])
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
              iconClassName={style.removeIcon}
              variant="quartiary"
              icon="Icon-Close-2px"
              iconSize="xs"
              onClick={() => removeTag(index)}
            />
          </li>
        ))}
        <li className={style.tagInput}>
          <input
            className={style.input}
            value={inputValue}
            type="text"
            onKeyDown={inputKeyDown}
            onChange={handleOnChange}
          />
        </li>
      </ul>
    </div>
  )
}

FieldTag.propTypes = {
  className: PropTypes.string,
}

FieldTag.defaultProps = {
  className: null,
}

export default FieldTag
