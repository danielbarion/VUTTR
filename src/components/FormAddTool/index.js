import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FieldText from 'components/FieldText'
import Button from 'components/Button'
import classNames from 'classnames'
import style from './style.module.css'

const FormAddTool = ({ className }) => {
  const [toolTitleValue, setToolTitleValue] = useState('')
  const [toolLinkValue, setToolLinkValue] = useState('')
  const [toolDescriptionValue, setToolDescriptionValue] = useState('')

  /**
   * Handle Input Values
   * @param {*} event
   */
  const handleChangeValue = (event) => {
    const { name, value } = event.target

    const formUtils = {
      title: () => setToolTitleValue(value),
      link: () => setToolLinkValue(value),
      description: () => setToolDescriptionValue(value),
    }

    formUtils[name]()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submited')
  }

  return (
    <div className={classNames(style.form, className)}>
      <form onSubmit={handleSubmit}>
        <FieldText
          name="title"
          label="Tool Name"
          placeholder="The title of tool on the card"
          value={toolTitleValue}
          onChange={handleChangeValue}
          autoComplete="off"
          required
        />

        <FieldText
          name="link"
          label="Tool Link"
          placeholder="The link of tool on the card"
          value={toolLinkValue}
          onChange={handleChangeValue}
          autoComplete="off"
        />

        <FieldText
          name="description"
          label="Tool Description"
          placeholder="The description of tool on the card"
          value={toolDescriptionValue}
          onChange={handleChangeValue}
          autoComplete="off"
        />

        {/* <FieldText
            name="tags"
            label="Tags"
            placeholder="The tags of tool on the card"
            value={toolTitleValue}
            onChange={handleChangeValue}
            ref={register({ required: true })}
            error={toolNameErrorValue}
            autoComplete="off"
          /> */}

        <Button label="Add Tool" type="submit" />
      </form>
    </div>
  )
}

FormAddTool.propTypes = {
  className: PropTypes.string,
}

FormAddTool.defaultProps = {
  className: null,
}

export default FormAddTool
