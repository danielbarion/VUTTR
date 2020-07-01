import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Typography from 'components/Typography'
import style from './style.module.css'

const Header = ({ className }) => (
  <div className={classNames(style.header, className)}>
    <Typography variant="header1">VUTTR</Typography>
    <Typography variant="header2">Very Usefull Tools to Remember</Typography>
  </div>
)

Header.propTypes = {
  className: PropTypes.string,
}

Header.defaultProps = {
  className: null,
}

export default Header
