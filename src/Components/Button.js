import React from 'react'

const Button = (props) => <div className="button" onClick={() => props.Click(props.Value, props.KeyType)}>{props.Value}</div>

export default Button