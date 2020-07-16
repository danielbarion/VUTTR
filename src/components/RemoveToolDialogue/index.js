import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { WrapComponentWithAppStateConsumer } from 'AppContext'
import Button from 'components/Button'
import style from './style.module.css'

const RemoveToolDialogue = ({ className, onClick, toolName, context }) => {
  const { modalClose } = context

  return (
    <div className={classNames(style.removeToolDialogue, className)}>
      <div>
        Are you sure you want to remove
        {toolName}
        ?
      </div>
      <div className={style.footer}>
        <Button label="Cancel" onClick={() => modalClose()} variant="quartiary" />
        <Button
          label="Yes, remove"
          onClick={onClick}
          className={style.confirmButton}
          display="danger"
        />
      </div>
    </div>
  )
}

RemoveToolDialogue.propTypes = {
  className: PropTypes.string,
  toolName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  context: PropTypes.shape({
    modalClose: PropTypes.func.isRequired,
  }).isRequired,
}

RemoveToolDialogue.defaultProps = {
  className: null,
  toolName: null,
}

export default WrapComponentWithAppStateConsumer(RemoveToolDialogue)
