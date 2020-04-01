import React from 'react';

export const User = ({ name, email, phone, address }) => {
    return (
        <li className="list-group-item">
            <div className="card">
                <div className="card-header">
                    <strong>{name}</strong>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{`Adress: city: ${address.city}, street: ${address.street}, suite: ${address.suite}`}</p>
                        <footer className="footer">
                            <small>
                                {`email: ${email}`} <br />{`phone: ${phone}`}
                            </small>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </li>
    )
}
