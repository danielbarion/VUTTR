/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import icons from './icons/icons.json'
import style from './style.module.css'

const Icon = ({ className, icon, size }) => {
  const iconElement = icons[icon]

  const containerClassnames = classNames(className, style.container, style[size])

  if (iconElement) {
    return (
      <span className={containerClassnames} dangerouslySetInnerHTML={{ __html: iconElement }} />
    )
  }

  return <span className={containerClassnames}>{icon}</span>
}

Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
  icon: PropTypes.string,
}

Icon.defaultProps = {
  className: null,
  size: 'm',
  icon: null,
}

export default Icon
