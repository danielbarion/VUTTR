import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Typography from 'components/Typography'
import Card from 'components/Card'
import CardsLoading from 'components/CardsLoading'
import Button from 'components/Button'
import style from './style.module.css'

const CardsList = ({ className, toolsList, isLoading, onClickRemove }) => (
  <>
    {isLoading ? (
      <CardsLoading amount={5} />
    ) : (
      <div className={classNames(style.cardsList, className)}>
        {toolsList.length ? (
          toolsList.map((item) => (
            <Card key={item.id} className={style.toolCard} type="1">
              <div className={style.header}>
                <Typography variant="header4" className={style.title}>
                  {item.title}
                </Typography>
                <div className={style.remove}>
                  {onClickRemove && (
                    <Button
                      className={classNames(style.removeButton)}
                      variant="quartiary"
                      display="danger"
                      icon="Icon-Close-2px"
                      iconSize="xxs"
                      label="remove"
                      onClick={onClickRemove}
                    />
                  )}
                </div>
              </div>
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
              No results found
              {' '}
              <span role="img" aria-label="sad mood">
                😔
              </span>
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
  onClickRemove: PropTypes.func,
}

CardsList.defaultProps = {
  className: null,
  isLoading: false,
  onClickRemove: null,
}

export default CardsList
