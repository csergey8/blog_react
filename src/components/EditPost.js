import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getPostById, clearPost, updatePost } from "../actions";
import { connect } from "react-redux";

class EditPost extends Component {
  state = {
    title: "",
    body: "",
    id: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getPostById(id)).then(() => {
      this.setState({
        title: this.props.data.post.title,
        body: this.props.data.post.body,
        id: this.props.data.post.id,
      });
    });
  }

  componentWillUnmount() {
    this.props.dispatch(clearPost());
  }

  handleChange(e, type) {
    this.setState({
      [type]: e.target.value,
    });
  }

  handleClick = () => {
    const data = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props
      .dispatch(updatePost(this.state.id, data))
      .then(() => this.props.history.push("/"));
  };

  render() {
    return (
      <div>
        <Paper style={{ padding: 20, textAlign: "center" }}>
          <TextField
            fullWidth
            onChange={e => this.handleChange(e, "title")}
            value={this.state.title}
          />
          <TextField
            fullWidth
            multiline
            rowsMax="4"
            onChange={e => this.handleChange(e, "body")}
            defaultValue={this.state.body}
          />
          <div style={{ marginTop: 20 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClick}
            >
              Update Post
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state,
  };
};
export default connect(mapStateToProps)(EditPost);
