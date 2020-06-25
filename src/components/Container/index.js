import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import style from './style.module.css'

const Container = ({ className, children, element: Element, fill }) => (
  <Element
    className={classNames(style.container, className, {
      [style.containerFill]: fill,
    })}
  >
    {children}
  </Element>
)

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  element: PropTypes.string,
  fill: PropTypes.bool,
}

Container.defaultProps = {
  element: 'div',
  className: null,
  fill: false,
}

export default Container
