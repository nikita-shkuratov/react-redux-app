import React from 'react'

export const Button = (props) => (
    <button id={props.id} onClick={props.onClick} type="button"
className={`btn btn-${props.type} btn-lg btn-block`}>{props.title}</button>
) 