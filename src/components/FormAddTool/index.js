import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from 'components/Button'
import FieldText from 'components/FieldText'
import FieldTag from 'components/FieldTag'
import { addTools } from 'utils/api'
import style from './style.module.css'

const FormAddTool = ({ className, onFormSuccess, onFormError }) => {
  const [toolTitleValue, setToolTitleValue] = useState('')
  const [toolLinkValue, setToolLinkValue] = useState('')
  const [toolDescriptionValue, setToolDescriptionValue] = useState('')
  const [toolTags, setToolTags] = React.useState([])

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

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      title: toolTitleValue,
      link: toolLinkValue,
      description: toolDescriptionValue,
      tags: toolTags,
    }

    const { request } = await addTools(data)

    if (request.status === 201 && onFormSuccess) {
      onFormSuccess()
    } else if (request.status !== 201 && onFormError) {
      onFormError()
    }
  }

  return (
    <div className={classNames(style.form, className)}>
      <form onSubmit={handleSubmit}>
        <FieldText
          name="title"
          label="Name"
          placeholder="The title of tool on the card"
          value={toolTitleValue}
          onChange={handleChangeValue}
          autoComplete="off"
          required
        />

        <FieldText
          name="link"
          label="Link"
          placeholder="The link of tool on the card"
          value={toolLinkValue}
          onChange={handleChangeValue}
          autoComplete="off"
          required
        />

        <FieldText
          name="description"
          label="Description"
          placeholder="The description of tool on the card"
          value={toolDescriptionValue}
          onChange={handleChangeValue}
          autoComplete="off"
          required
        />

        <FieldTag
          name="tags"
          label="Tags"
          placeholder="The Tags of tool on the card"
          autoComplete="off"
          tags={toolTags}
          setTags={setToolTags}
          required
        />

        <div className={style.formFooter}>
          <Button label="Add Tool" type="submit" />
        </div>
      </form>
    </div>
  )
}

FormAddTool.propTypes = {
  className: PropTypes.string,
  onFormSuccess: PropTypes.func,
  onFormError: PropTypes.func,
}

FormAddTool.defaultProps = {
  className: null,
  onFormSuccess: null,
  onFormError: null,
}

export default FormAddTool
