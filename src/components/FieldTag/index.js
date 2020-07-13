import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// import FieldText from 'components/FieldText'
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

  return (
    <div className={classNames(style.container, className)}>
      <ul className={style.tags}>
        {tags.map((tag, index) => (
          <li key={tag}>
            {tag}
            <button
              type="button"
              onClick={() => {
                removeTag(index)
              }}
            >
              +
            </button>
          </li>
        ))}
        <li className={style.input}>
          <input
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
