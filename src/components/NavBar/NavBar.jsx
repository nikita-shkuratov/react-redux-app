import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { showLog, logout } from '../../redux/actions'
import './NavBar.scss'

export const Navbar = () => {
    const dispatch = useDispatch();
    const authorization = useSelector(state => state.login.login)

    return (
        <nav className="contaner_navbar">
            <div className="logo_navbar"><a className='logo_link' href='https://github.com/nikita-shkuratov/react-redux-app' target='_blank' rel="noopener noreferrer" title='link to git'>React-Redux-App</a></div>
            <ul className="list_navbar">
                <li className="navbar_item">
                    <NavLink
                        className="nav-link"
                        to="/"
                        exact><button className="btn_navigation">HOME</button></NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink
                        className="nav-link"
                        to={authorization ? "/posts" : "/"}>
                        <button disabled={!authorization} className="btn_navigation">POSTS</button>
                    </NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink
                        className="nav-link"
                        to={authorization ? "/users" : "/"}>
                        <button disabled={!authorization} className="btn_navigation">USERS</button>
                    </NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink
                        className="nav-link"
                        to={authorization ? "/news" : "/"}>
                        <button disabled={!authorization} className="btn_navigation">NEWS</button>
                    </NavLink>
                </li>
            </ul>
            <div className="btn_autorization_navbar">
                <button disabled={authorization} type='button' className="btn_login_navbar" onClick={() => dispatch(showLog())}>LOGIN</button>
                <NavLink to={"/"}>
                    <button type='button' className="btn_logout_navbar" onClick={() => dispatch(logout())}>LOGOUT</button>
                </NavLink>
            </div>
        </nav >
    )
}