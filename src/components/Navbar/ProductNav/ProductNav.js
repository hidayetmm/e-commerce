import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1, 0, 3, 0),
  },
  indicator: {
    backgroundColor: "#14212d",
  },
}));

const ProductNav = ({ categories }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        classes={{
          indicator: classes.indicator,
        }}
        value={value}
        onChange={handleChange}
        centered
        // variant="scrollable"
        // scrollButtons="auto"
      >
        <Tab
          component={Link}
          to="/"
          label="All products"
          key="all"
          disableRipple
          disableFocusRipple
        />
        {categories.map((category) => (
          <Tab
            component={Link}
            to={`/${category.slug}`}
            label={category.name}
            key={category.id}
            disableRipple
            disableFocusRipple
          />
        ))}
      </Tabs>
    </div>
  );
};

export default ProductNav;
