import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Registration } from './Registration/Registration'
import { Login } from './Login/Login'
import { showReg } from '../../redux/actions'

export const Home = () => {
    const dispatch = useDispatch();
    const registration = useSelector(state => state.modal.modalRegistration)
    const modalLogin = useSelector(state => state.modal.modalLogin)
    const authorization = useSelector(state => state.login.login)

    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Hello!</h1>
                <p className="lead">let me tell you a little about this application.
                This is a simple SPA application in which i used: HTML5, SCSS, REACT, REDUX.
                After authorization, you will have access to several pages with the data that we receive when working with api.
                  You can register or log in as a guest.To enter as a guest enter:<br /><br />
                    <strong>login</strong>:guest <br />
                    <strong>password</strong>:guest</p>
                <hr className="my-4" />
                <p>To enter on your behalf please register.</p>
                <button disabled={authorization} onClick={() => dispatch(showReg())}
                    type="button" className="btn btn-outline-primary">Registration
                 </button>
            </div>
            {registration && <Registration />}
            {modalLogin && <Login />}
        </div>
    )
}