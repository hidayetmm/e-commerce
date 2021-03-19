import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
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

const ProductNav = () => {
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
        <Tab label="All products" disableRipple disableFocusRipple />
        <Tab label="Before shaving" disableRipple disableFocusRipple />
        <Tab label="After shaving" disableRipple disableFocusRipple />
        <Tab label="Daily care" disableRipple disableFocusRipple />
      </Tabs>
    </div>
  );
};

export default ProductNav;
