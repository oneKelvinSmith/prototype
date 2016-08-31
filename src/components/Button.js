import React, { PropTypes } from 'react'

const Button = ({text}) => (
  <button>{text}</button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button
