import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { WrapComponentWithAppStateConsumer } from 'AppContext'
import FieldText from 'components/FieldText'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import style from './style.module.css'

const HeaderActions = ({ className, context }) => {
  const { state, setSearchQuerie } = context
  const { searchQuerie } = state

  const handleChange = (e) => {
    setSearchQuerie(e.target.value)
  }

  const [checkboxValue, setCheckboxValue] = React.useState(false)

  const handleCheckboxClick = () => {
    setCheckboxValue(!checkboxValue)
  }

  return (
    <div className={classNames(style.headerActions, className)}>
      <FieldText
        name="name-1"
        hint="Digite seu nome completo"
        placeholder="search"
        value={searchQuerie}
        onChange={handleChange}
        prefixIcon="Icon-Search-2px"
        className={style.searchField}
      />

      <Checkbox
        label="search in tags only"
        value={checkboxValue}
        onClick={handleCheckboxClick}
        className={style.tagsCheckbox}
      />

      <Button label="Add" iconClassName={style.addIcon} icon="Icon-Close-2px" iconSize="xs" />
    </div>
  )
}

HeaderActions.propTypes = {
  className: PropTypes.string,
  context: PropTypes.shape({
    state: PropTypes.shape({
      searchQuerie: PropTypes.string.isRequired,
      isLoadingTools: PropTypes.bool.isRequired,
    }),
    setSearchQuerie: PropTypes.func.isRequired,
  }).isRequired,
}

HeaderActions.defaultProps = {
  className: null,
}

export default WrapComponentWithAppStateConsumer(HeaderActions)
