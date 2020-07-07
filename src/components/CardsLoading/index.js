import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Card from 'components/Card'
import PlaceholderShimmer from 'components/PlaceholderShimmer'
import style from './style.module.css'

const CardsLoading = ({ amount }) => {
  const cards = []
  for (let index = 0; index < amount; index += 1) {
    cards.push(
      <Card key={index} className={style.toolCard} type="1">
        <PlaceholderShimmer className={classNames(style.placeholderTitle, style.title)} />
        <PlaceholderShimmer
          className={classNames(style.placeholderDescription, style.description)}
        />
        <div className={style.tags}>
          <PlaceholderShimmer className={classNames(style.placeholderTags, style.tag)} />
        </div>
      </Card>,
    )
  }

  return cards
}

CardsLoading.propTypes = {
  amount: PropTypes.number,
}

CardsLoading.defaultProps = {
  amount: 1,
}

export default CardsLoading
