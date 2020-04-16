import React from 'react'

export const Alert = ({ title, type }) => (
    <div className={`alert alert-${type}`} role="alert">
        {title}
    </div>
)

