import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import PostItem from "./components/PostItem";
import EditPost from "./components/EditPost";
import Layout from "./layout";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/edit_post/:id" component={EditPost} exact />
        <Route path="/post/:id" component={PostItem} exact />
        <Route path="/create_post" component={CreatePost} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </Layout>
  );
};

export default Routes;
