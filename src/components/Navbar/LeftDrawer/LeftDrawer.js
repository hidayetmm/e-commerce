import React from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const LeftDrawer = ({
  categories,
  fetchCategoryProducts,
  handleDrawer,
  drawerToggle,
}) => {
  const classes = useStyles();
  console.log(categories);
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
        <List onClick={handleDrawer}>
          <ListItem>
            <Typography variant="body2" color="textSecondary">
              Categories
            </Typography>
          </ListItem>
          {categories.map((category) => (
            <ListItem button key={category.id}>
              <Typography
                children={category.name}
                component={NavLink}
                to={`/${category.slug}`}
                variant="button"
                className={classes.navTitle}
                color="inherit"
                gutterBottom
              />
            </ListItem>
          ))}
          <Divider />
          <List onClick={handleDrawer}>
            <ListItem button>
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
            <ListItem button>
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

            <ListItem button>
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
        </List>
      </Drawer>
    </div>
  );
};

export default LeftDrawer;
