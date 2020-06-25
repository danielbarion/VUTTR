import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './style.module.css'

const Header = ({ className, children, element: Element }) => (
  <Element className={classNames(style.header, className)}>{children}</Element>
)

Header.propTypes = {
  className: PropTypes.string,
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

Header.defaultProps = {
  className: null,
  element: 'div',
}

export default Header
