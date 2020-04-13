import React from 'react'
import './Posts.scss'

export const CardPost = ({ title, body }) => {
    return (
        <li className="post_list_item">
            <div>
                <div className="post_card_header">
                    <strong>{title}</strong>
                </div>
                <div className="post_card_body">
                    <blockquote className="post_card_footer">
                        <p>{body}</p>
                    </blockquote>
                </div>
            </div>
        </li>
    )
}