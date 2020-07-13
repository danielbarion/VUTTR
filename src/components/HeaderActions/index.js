import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { WrapComponentWithAppStateConsumer } from 'AppContext'
import FieldText from 'components/FieldText'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import style from './style.module.css'

const HeaderActions = ({ className, context, onClickAdd }) => {
  const { state, setSearchQuerie, setSearchInTagsOnly } = context
  const { searchQuerie, searchInTagsOnly, isLoadingTools } = state

  const handleChange = (event) => {
    setSearchQuerie(event.target.value)
  }

  const handleCheckboxClick = () => {
    setSearchInTagsOnly(!searchInTagsOnly)
  }

  const handleClickAdd = () => {
    onClickAdd()
  }

  return (
    <div className={classNames(style.headerActions, className)}>
      <FieldText
        name="name-1"
        placeholder="search"
        value={searchQuerie}
        onChange={handleChange}
        prefixIcon="Icon-Search-2px"
        className={style.searchField}
        disabled={isLoadingTools}
        autoComplete="off"
      />

      <Checkbox
        label="search in tags only"
        value={searchInTagsOnly}
        onClick={handleCheckboxClick}
        className={style.tagsCheckbox}
        disabled={isLoadingTools}
      />

      <Button
        label="Add"
        iconClassName={style.addIcon}
        icon="Icon-Close-2px"
        iconSize="xs"
        onClick={handleClickAdd}
      />
    </div>
  )
}

HeaderActions.propTypes = {
  className: PropTypes.string,
  context: PropTypes.shape({
    state: PropTypes.shape({
      searchQuerie: PropTypes.string.isRequired,
      searchInTagsOnly: PropTypes.bool.isRequired,
      isLoadingTools: PropTypes.bool.isRequired,
    }),
    setSearchQuerie: PropTypes.func.isRequired,
    setSearchInTagsOnly: PropTypes.func.isRequired,
  }).isRequired,
  onClickAdd: PropTypes.func.isRequired,
}

HeaderActions.defaultProps = {
  className: null,
}

export default WrapComponentWithAppStateConsumer(HeaderActions)
