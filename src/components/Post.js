import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";

const Post = props => {
  return (
    <Paper
      style={{
        margin: "20px 0",
        padding: "25px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link to={`/post/${props.post.id}`}>
        <Typography variant="h6">{props.post.title}</Typography>
        <Typography variant="caption">{props.post.body}</Typography>
      </Link>
      <div>
        <Link to={`/edit_post/${props.post.id}`}>
          <EditIcon />
        </Link>
        <DeleteIcon
          onClick={props.deletePost}
          style={{ cursor: "pointer", marginLeft: 5 }}
        />
      </div>
    </Paper>
  );
};

export default connect()(Post);
