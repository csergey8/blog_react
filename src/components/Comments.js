import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Comments = props => {
  const renderComments = () =>
    props.comments.map((comment, i) => {
      return (
        <Typography style={{ textAlign: "center", margin: "5px 0" }} key={i}>
          {comment.body}
        </Typography>
      )
    });

  return (
    <div>
      <div style={{ marginTop: 10, textAlign: "center" }}>
        {renderComments()}
      </div>
      <div style={{ marginTop: 25, textAlign: "center" }}>
        <TextField onChange={e => props.onChangeComment(e)} />
        <Button
          style={{ marginLeft: 15 }}
          size="small"
          variant="contained"
          color="primary"
          onClick={props.createCommet}
        >
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default Comments;
