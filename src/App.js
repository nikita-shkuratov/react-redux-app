import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navbar } from './components/NavBar/NavBar'
import { Home } from './pages/Home/Home'
import { Posts } from './pages/Posts/Posts'
import { Users } from './pages/Users/Users'
import { News } from './pages/News/News'
import { Alert } from './components/Alert'
import './App.scss'

const App = () => {
    const authorization = useSelector(state => state.login.login)

    return (
        <BrowserRouter>
            <div className='wrapper_bg'>
                <Navbar />
                <div className='container pt-4'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        {authorization
                            ? <Fragment><Route exact path='/posts' component={Posts} />
                                <Route exact path='/users' component={Users} />
                                <Route exact path='/news' component={News} />
                            </Fragment>
                            : <Alert title='Pages are available to authorized users.' type='danger' />}
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App