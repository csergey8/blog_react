import React, { Component } from "react";
import Post from "./Post";
import { getPosts, deletePost } from "../actions";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.postsUpdate();
  }

  postsUpdate() {
    this.props.dispatch(getPosts()).then(() => {
      this.setState({
        posts: this.props.data.posts,
      });
    });
  }

  handleDelete(id) {
    this.props.dispatch(deletePost(id)).then(() => {
      this.postsUpdate();
    });
  }

  renderPostsList() {
    return this.state.posts.map(post => (
      <Post
        deletePost={() => this.handleDelete(post.id)}
        key={post.id}
        post={post}
      />
    ));
  }

  render() {
    return (
      <div>
        {this.state.posts ? this.renderPostsList() : <div>Loading</div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps)(Home);
