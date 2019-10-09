import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { createPost } from "../actions";

class CreatePost extends Component {
  state = {
    title: "",
    body: "",
  };

  handleChange(e, type) {
    this.setState({
      [type]: e.target.value,
    });
  }

  handleClick = () => {
    this.props.dispatch(createPost(this.state)).then(() => {
      this.props.history.push("/");
    });
  };
  render() {
    return (
      <Paper style={{ padding: 20, textAlign: "center" }}>
        <TextField
          fullWidth
          label="Title"
          onChange={e => this.handleChange(e, "title")}
        />
        <TextField
          label="Body"
          multiline
          fullWidth
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
            Create a post
          </Button>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps)(CreatePost);
