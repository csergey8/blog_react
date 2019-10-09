import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const Layout = props => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Container
            maxWidth="lg"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <IconButton>
                <MenuIcon />
              </IconButton>
            </Link>
            <Typography variant="h6">Blog React</Typography>
            <Link to="/create_post" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary">
                Create Post
              </Button>
            </Link>
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ padding: 20 }}>
        {props.children}
      </Container>
    </div>
  );
};

export default Layout;
