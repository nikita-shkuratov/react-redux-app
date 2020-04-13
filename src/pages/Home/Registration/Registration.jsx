import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideReg, regNewUser, showAlert, showLoader, hideLoader } from '../../../redux/actions'
import { Alert } from '../../../components/Alert'
import { Loader } from '../../../components/Loader/Loader'
import './Registration.scss'

export const Registration = () => {
    const dispatch = useDispatch()
    const registration = useSelector(state => state.modal.modalRegistration)
    let { text, typeAlert } = useSelector(state => state.appLoader.alert)
    const loading = useSelector(state => state.appLoader.loading)

    const [dataPerson, setDataPerson] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        if (e.target.id === 'firstName') {
            let validationFirstName = e.target.value

            if (validationFirstName.length >= 10) {
                e.target.className = 'form-control invalid'
                dispatch(showAlert('You entered a lot of characters!', 'danger'))
                return validationFirstName = ''
            } if (validationFirstName.length < 1) {
                e.target.className = 'form-control invalid'
                dispatch(showAlert('Name too short!', 'danger'))
                return validationFirstName = ''
            } if (validationFirstName.search(/\d/) !== -1) {
                e.target.className = 'form-control invalid'
                dispatch(showAlert('Name cannot contain numbers!', 'danger'))
                return validationFirstName = ''
            } if (validationFirstName.search(/^[a-zA-Z0-9]+$/)) {
                e.target.className = 'form-control invalid'
                dispatch(showAlert('The name must consist of latin characters!', 'danger'))
                return validationFirstName = ''
            } if (validationFirstName !== '') {
                e.target.className = 'form-control valid'
                setDataPerson({
                    firstName: validationFirstName
                })
            }

        } if (e.target.id === 'lastName') {
            let validationLastName = e.target.value

            if (validationLastName.length >= 10) {
                e.target.className = 'form-control invalid'
                dispatch(showAlert('You entered a lot of characters!', 'danger'))
                return validationLastName = ''
            } if (validationLastName.length < 1) {
                e.target.className = 'form-control invalid'
                dispatch(showAlert('Last Name too short!', 'danger'))
                return validationLastName = ''

            } if (validationLastName.search(/\d/) !== -1) {
                e.target.className = 'form-control invalid'
                dispatch(showAlert('Last Name cannot contain numbers!', 'danger'))
                return validationLastName = ''
            } if (validationLastName.search(/^[a-zA-Z0-9]+$/)) {
                e.target.className = 'form-control invalid'
                dispatch(showAlert('The last name must consist of latin characters!', 'danger'))
                return validationLastName = ''
            } if (validationLastName !== '') {
                e.target.className = 'form-control valid'
                setDataPerson({
                    lastName: validationLastName
                })
            }

        } if (e.target.id === 'email') {
            let validationEmail = e.target.value

            if (validationEmail.length >= 15) {
                e.target.className = 'form-control invalid'
                dispatch(showAlert('You entered a lot of characters!', 'danger'))
                return validationEmail = ''
            } if (validationEmail.length < 1) {
                e.target.className = 'form-control invalid'
                dispatch(showAlert('Email too short!', 'danger'))
                return validationEmail = ''
            } if (validationEmail.search(/[a-zA-Z0-9]+@/)) {
                e.target.className = 'form-control invalid'
                dispatch(showAlert('Email is entered incorrectly', 'danger'))
                return validationEmail = ''
            } if (validationEmail !== '') {
                e.target.className = 'form-control valid'
                setDataPerson({
                    email: e.target.value
                })
            }

        } if (e.target.id === 'password') {
            let validationPassword = e.target.value

            if (validationPassword.length >= 5) {
                e.target.className = 'form-control invalid'
                dispatch(showAlert('Password must be 5 characters or less!', 'danger'))
                return validationPassword = ''
            } if (validationPassword.length < 1) {
                e.target.className = 'form-control invalid'
                dispatch(showAlert('Password too short!', 'danger'))
                return validationPassword = ''
            } if (validationPassword !== '') {
                e.target.className = 'form-control valid'
                setDataPerson({
                    password: validationPassword
                })
            }
        }
    }

    const handleRegUser = ({ firstName, lastName, email,password }) => {
        if (firstName && lastName && email && password !== '') {
            dispatch(showLoader())
            dispatch(regNewUser(dataPerson))
            setTimeout(() => dispatch(hideLoader()), 1000)
            setTimeout(() => dispatch(showAlert('Registration completed successfully!', 'success')), 1000)
            setTimeout(() => dispatch(hideReg()), 3000)
        } else {
            dispatch(showAlert('Please fill in all fields!', 'danger'))
        }
    }


    if (registration) {
        return (
            <div className="registration_bg" >
                <div className="wrapper_position" >
                    <div className="registration">
                        {text !== null && <Alert title={text} type={typeAlert} />}
                        {loading && <Loader />}

                        <div className="input-group m-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">First Name</span>
                            </div>
                            <input
                                id='firstName'
                                type="text"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={handleChange}
                                placeholder='John'
                            />
                        </div>
                        <div className="input-group m-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Last Name</span>
                            </div>
                            <input
                                id='lastName'
                                type="text"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={handleChange}
                                placeholder='Smith'
                            />
                        </div>
                        <div className="input-group m-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                            </div>
                            <input
                                id='email'
                                type="email"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={handleChange}
                                placeholder='smith@mail.ru'
                            />
                        </div>
                        <div className="input-group m-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                            </div>
                            <input
                                id='password'
                                type="password"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <button onClick={() => handleRegUser(dataPerson)} id='btn_accept' type="button" className="btn btn-primary btn-lg btn-block">accept</button>
                            <button onClick={() => dispatch(hideReg())} id='btn_close' type="button" className="btn btn-danger btn-lg btn-block">close</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
