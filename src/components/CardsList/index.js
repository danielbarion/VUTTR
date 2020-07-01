import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Typography from 'components/Typography'
import Card from 'components/Card'
import style from './style.module.css'

const CardsList = ({ className, toolsList }) => (
  <div className={classNames(style.cardsList, className)}>
    {toolsList.length &&
      toolsList.map((item) => (
        <Card key={item.id} className={style.toolCard} type="1">
          <Typography variant="header4">{item.title}</Typography>
          <Typography variant="bodyS">{item.description}</Typography>
          <div className={style.tags}>
            {item.tags.map((tag) => (
              <Typography key={tag} variant="bodyXS" element="span">{`#${tag}`}</Typography>
            ))}
          </div>
        </Card>
      ))}
  </div>
)

CardsList.propTypes = {
  className: PropTypes.string,
  toolsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
}

CardsList.defaultProps = {
  className: null,
}

export default CardsList
