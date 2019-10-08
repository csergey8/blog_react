import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import EditPost from './components/EditPost';

const Routes = (props) => {
    return (
        <Switch>
            <Route path="/edit_post/:id" component={EditPost} exact />
            <Route path="/post/:id" component={Post} exact />
            <Route path="/create_post" component={CreatePost} exact /> 
            <Route path="/" component={Home} exact />
        </Switch>
    )
}

export default Routes;