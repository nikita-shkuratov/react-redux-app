import React from 'react'

export const CardUser = ({ name, email, phone, address, firstName }) => {
    return (
        <li className="list_user_item">
            <div className="card_contaner_user">
                <div className="card_header_user">
                    <strong>{name}{firstName}</strong>
                </div>
                <div className="card_body_user">
                    <blockquote className="card_main_user">
                        <p>{address
                            ? `Adress: city: ${address.city}, street: ${address.street}, suite: ${address.suite}`
                            : 'There is no complete information since the user has recently registered.'}</p>
                        <footer className="card_footer_user">
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