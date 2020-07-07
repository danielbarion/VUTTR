import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './style.module.css'

const PlaceholderShimmer = ({ customStyle, className }) => (
  <div
    style={customStyle}
    className={classNames(style.PlaceholderShimmer, style.shine, className)}
  />
)

PlaceholderShimmer.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.shape(),
}

PlaceholderShimmer.defaultProps = {
  className: '',
  customStyle: {},
}

export default PlaceholderShimmer
