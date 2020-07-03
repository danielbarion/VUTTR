import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import FieldText from 'components/FieldText'
import Button from 'components/Button'
import style from './style.module.css'

const HeaderActions = ({ className }) => {
  const [value, setValue] = React.useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className={classNames(style.HeaderActions, className)}>
      <FieldText
        name="name-1"
        hint="Digite seu nome completo"
        placeholder="search"
        value={value}
        onChange={handleChange}
        prefixIcon="Icon-Search-2px"
      />

      <Button label="Add" iconClassName={style.addIcon} icon="Icon-Close-2px" iconSize="xs" />
    </div>
  )
}

HeaderActions.propTypes = {
  className: PropTypes.string,
}

HeaderActions.defaultProps = {
  className: null,
}

export default HeaderActions
