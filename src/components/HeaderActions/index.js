import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { WrapComponentWithAppStateConsumer } from 'AppContext'
import FieldText from 'components/FieldText'
import Button from 'components/Button'
import style from './style.module.css'

const HeaderActions = ({ className, context }) => {
  const { state, setSearchQuerie } = context
  const { searchQuerie } = state

  const handleChange = (e) => {
    setSearchQuerie(e.target.value)
  }

  return (
    <div className={classNames(style.HeaderActions, className)}>
      <FieldText
        name="name-1"
        hint="Digite seu nome completo"
        placeholder="search"
        value={searchQuerie}
        onChange={handleChange}
        prefixIcon="Icon-Search-2px"
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
