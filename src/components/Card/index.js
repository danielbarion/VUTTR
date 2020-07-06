import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './style.module.css'

const Card = ({ className, type, children, element: Element }) => (
  <Element className={classNames(style.card, className, style[`type-${type}`])}>{children}</Element>
)

Card.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['flat', '1', '2', '3', '4']),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.object,
  ]).isRequired,
  element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.object,
  ]),
}

Card.defaultProps = {
  className: null,
  element: 'div',
  type: '3',
}

export default Card
