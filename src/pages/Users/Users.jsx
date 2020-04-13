import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../redux/actions'
import { CardUser } from './CardUser'
import { Loader } from '../../components/Loader/Loader'
import { Alert } from '../../components/Alert'
import './Users.scss'

export const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.user.fetchUsers)
    const loading = useSelector(state => state.appLoader.loading)
    let { text } = useSelector(state => state.appLoader.alert)

    const allUsers = []
    users.forEach(arr => arr.map(user => allUsers.unshift(user)))

    const [showUserContainer, setShowUserContainer] = useState({
        showUserList: false
    })

    const loadingUsers = () => {
        dispatch(fetchUsers())
        setShowUserContainer({
            showUserList: true
        })
    }

    const hideUserList = () => {
        setShowUserContainer({
            showUserList: false
        })
    }

    if (loading) {
        return (
            <Fragment>
                <Loader /><br />
                {text !== null && <Alert title={text} type='danger' />}
            </Fragment>
        )
    }

    return (
        <div>
            {text !== null && <Alert title={text} type='success' />}
            <button
                id='btn_loading_users'
                onClick={() => loadingUsers()}
                type="button"
                className="btn btn-primary btn-lg btn-block">LOADING USERS
             </button>

            {showUserContainer.showUserList &&
                <button
                    id='btn_hide_users'
                    onClick={() => hideUserList()}
                    type="button"
                    className="btn btn-danger btn-lg btn-block">HIDE USERS
                </button>
            }
            {showUserContainer.showUserList && <div>
                <ul className="users_list_contaner">
                    {allUsers.map(user => <CardUser
                        key={Math.random()}
                        firstName={user.firstName}
                        name={user.name}
                        email={user.email}
                        phone={user.phone}
                        address={user.address} />)}
                </ul>
            </div>}

        </div>
    )
}
