import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Typography from 'components/Typography'
import Card from 'components/Card'
import CardsLoading from 'components/CardsLoading'
import style from './style.module.css'

const CardsList = ({ className, toolsList, isLoading }) => (
  <>
    {isLoading ? (
      <CardsLoading amount={5} />
    ) : (
      <div className={classNames(style.cardsList, className)}>
        {toolsList.length ? (
          toolsList.map((item) => (
            <Card key={item.id} className={style.toolCard} type="1">
              <Typography variant="header4" className={style.title}>
                {item.title}
              </Typography>
              <Typography variant="bodyS" className={style.description}>
                {item.description}
              </Typography>
              <div className={style.tags}>
                {item.tags.map((tag) => (
                  <Typography
                    key={tag}
                    variant="bodyXS"
                    element="span"
                    className={classNames(style.tag, 'tag')}
                  >
                    {`#${tag}`}
                  </Typography>
                ))}
              </div>
            </Card>
          ))
        ) : (
          <Card className={style.empty} type="flat">
            <Typography variant="body" element="div">
              {`No results found ${(
                <span role="img" aria-label="sad mood">
                  😔
                </span>
              )}`}
            </Typography>
          </Card>
        )}
      </div>
    )}
  </>
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
  isLoading: PropTypes.bool,
}

CardsList.defaultProps = {
  className: null,
  isLoading: false,
}

export default CardsList
