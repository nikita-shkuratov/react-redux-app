import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions';
import { User } from './User';
import { Loader } from '../../components/Loader/Loader';
import { Alert } from '../../components/Alert';

export const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.fetchUsers);
    const loading = useSelector(state => state.appLoader.loading);
    const alert = useSelector(state => state.appLoader.alert);

    if (loading) {
        return (
            <Fragment>
                <Loader />
                <br />
                {alert !== null && <Alert title={alert} type='danger' />}
            </Fragment>
        );
    };

    return (
        <div>
            <h1>Users Page</h1>
            {alert !== null && <Alert title={alert} type='success' />}
            <button onClick={() => dispatch(fetchUsers())} type="button" className="btn btn-primary btn-lg btn-block">LOADING USERS</button>
            <ul className="list-group">
                {users.map(user => <User
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    address={user.address} />)}
            </ul>
        </div>
    );
};
