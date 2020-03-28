import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">
                React-Redux-App
        </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/"
                        exact>HOME</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/posts">POSTS</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/users">USERS</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/news">NEWS</NavLink>
                </li>
            </ul>
            <div>
                <Button
                type={'success'}
                title={'LOGIN'}/>
                <Button
                type={'secondary'}
                title={'LOGOUT'}/>
            </div>
        </nav>
    )
}