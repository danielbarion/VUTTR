import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './style.module.css'

const Typography = ({ className, children, innerHTML, variant, element }) => {
  const typographyClassNames = classNames(style.typography, className, style[variant])

  const elementMap = {
    header1: 'h1',
    header2: 'h2',
    header3: 'h3',
    header4: 'h4',
    header5: 'h5',
    body: 'h6',
    bodyS: 'p',
    bodyXS: 'p',
  }

  const TypographyElement = element || elementMap[variant]

  if (innerHTML) {
    return (
      <TypographyElement
        className={typographyClassNames}
        dangerouslySetInnerHTML={{ __html: innerHTML }}
      />
    )
  }

  return <TypographyElement className={typographyClassNames}>{children}</TypographyElement>
}

Typography.propTypes = {
  className: PropTypes.string,
  element: PropTypes.string,
  variant: PropTypes.oneOf([
    'header1',
    'header2',
    'header3',
    'header4',
    'header5',
    'body',
    'bodyS',
    'bodyXS',
  ]),
  innerHTML: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.object,
  ]),
}

Typography.defaultProps = {
  className: null,
  element: null,
  innerHTML: null,
  children: null,
  variant: 'bodyS',
}

export default Typography
