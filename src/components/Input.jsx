import React from 'react'

export const Input = (props) => (
    <div className="input-group m-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">{props.title}</span>
        </div>
        <input
            id={props.id}
            type={props.type}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={props.onChange}
            placeholder={props.placeholder}
            ref={props.ref}
        />
    </div>
) 