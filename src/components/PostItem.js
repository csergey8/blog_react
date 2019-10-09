import React, { Component } from "react";
import { getPostById, createComment } from "../actions";
import { connect } from "react-redux";
import Comments from "./Comments";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class PostItem extends Component {
  state = {
    comments: [],
    newComment: "",
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getPostById(id)).then(res => {
      this.setState({
        comments: res.payload.comments,
      });
    });
  }

  onChangeComment(e) {
    this.setState({
      newComment: e.target.value,
    });
  }

  createCommet = () => {
    const id = this.props.match.params.id;
    console.log(id);
    this.props.dispatch(createComment(id, this.state.newComment)).then(() => {
      this.props.dispatch(getPostById(id)).then(res => {
        this.setState({
          comments: res.payload.comments,
        });
      });
    });
  };

  renderPost() {
    if (this.props.data.post) {
      return (
        <div>
          <Typography variant="h5" component="h3">
            {this.props.data.post.title}
          </Typography>
          <Typography component="p">{this.props.data.post.body}</Typography>
          <Typography style={{ marginTop: 30, textAlign: "center" }}>Comments:</Typography>
          <Comments
            comments={this.state.comments}
            onChangeComment={e => this.onChangeComment(e)}
            createCommet={this.createCommet}
          />
        </div>
      );
    }
  }
  render() {
    return (
      <Paper style={{ padding: 50 }}>
        {this.props.data ? this.renderPost() : null}
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps)(PostItem);
