import React from 'react';

export const PostsList = ({ title, body, id }) => {
    return (
        <li key={id} className="list-group-item">
            <div>
                <div className="card-header">
                    <strong> {title}</strong>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{body}.</p>
                    </blockquote>
                </div>
            </div>
        </li>
    )
}