import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideLog, fetchRegUsers, login, showAlert } from '../../../redux/actions'
import { Alert } from '../../../components/Alert'
import './Login.scss'

export const Login = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.baseUsers.users)
    let { text, typeAlert } = useSelector(state => state.appLoader.alert)

    useEffect(() => {
        dispatch(fetchRegUsers())
        // eslint-disable-next-line
    }, [])

    const inputEmailRef = React.createRef()
    const inputPasswordRef = React.createRef()

    const enteredData = {
        enteredEmail: null,
        enteredPassword: null
    }

    const changeHandler = (clearInput) => {
        enteredData.enteredEmail = inputEmailRef.current.value
        enteredData.enteredPassword = inputPasswordRef.current.value

        if (clearInput === true) {
            inputEmailRef.current.value = null
            inputPasswordRef.current.value = null
        }
    }

    const loginHandler = () => {
        const findDataUser = user.find(person => person.email === enteredData.enteredEmail)

        if (findDataUser) {
            if (findDataUser.password === enteredData.enteredPassword) {
                dispatch(login())
                dispatch(showAlert(`Authorization was successful. Hello ${findDataUser.firstName} `, 'success'))
                setTimeout(() => dispatch(hideLog()), 3000)
            }
        } else {
            dispatch(showAlert('You entered the wrong email or password', 'danger'))
            changeHandler(true)
        }
    }

    return (
        <div className="login_bg" >
            <div className="wrapper_position" >
                <div className="login">
                    {text !== null && <Alert title={text} type={typeAlert} />}
                    <div className="input-group m-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                        </div>
                        <input ref={inputEmailRef} onChange={changeHandler} type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group m-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                        </div>
                        <input ref={inputPasswordRef} onChange={changeHandler} type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <button id='btn_accept' onClick={loginHandler} type="button" className="btn btn-primary btn-lg btn-block">accept</button>
                    <button id='btn_close' onClick={() => dispatch(hideLog())} type="button" className="btn btn-danger btn-lg btn-block">close</button>
                </div>
            </div>
        </div>
    )
}
