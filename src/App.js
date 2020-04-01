import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';

import { Home } from './pages/Home';
import { Posts } from './pages/Posts/Posts';
import { Users } from './pages/Users/Users';
import { News } from './pages/News/News';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className='container pt-4'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/posts' component={Posts} />
                <Route exact path='/users' component={Users} />
                <Route exact path='/news' component={News} />
            </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App