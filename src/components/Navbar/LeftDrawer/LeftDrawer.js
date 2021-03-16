import React from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const LeftDrawer = ({ handleDrawer, drawerToggle }) => {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        anchor="left"
        open={drawerToggle}
        ModalProps={{ onBackdropClick: handleDrawer }}
        transitionDuration={700}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItem button onClick={handleDrawer}>
            <Typography
              component={NavLink}
              to="/"
              variant="button"
              className={classes.navTitle}
              color="inherit"
            >
              Home
            </Typography>
          </ListItem>
          <Divider />
          <ListItem button onClick={handleDrawer}>
            <Typography
              component={NavLink}
              to="/"
              variant="button"
              className={classes.navTitle}
              color="inherit"
            >
              Contact
            </Typography>
          </ListItem>
          <Divider />

          <ListItem button onClick={handleDrawer}>
            <Typography
              component={NavLink}
              to="/"
              variant="button"
              className={classes.navTitle}
              color="inherit"
            >
              About us
            </Typography>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default LeftDrawer;
