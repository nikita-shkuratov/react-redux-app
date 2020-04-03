import React from 'react';

export const Input = ({ onChange, onKeyPress, value, onClick }) => (
    <div className="input-group mb-3">
        <input
            type="text"
            className="form-control"
            placeholder="What news are we looking for?"
            aria-label="What news are we looking for?"
            aria-describedby="button-addon2"
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={value} />
        <div className="input-group-append">
            <button onClick={onClick} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>
    </div>
)
