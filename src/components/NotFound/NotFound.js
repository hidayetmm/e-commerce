import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import UndrawEmpty from "react-undraw-illustrations/lib/components/UndrawEmpty/UndrawEmpty";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const NotFound = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.svg}>
        <UndrawEmpty primaryColor="#14212d" />
        <Typography color="textSecondary" gutterBottom>
          Page not found
        </Typography>
        <Typography variant="body2">
          <Button
            component={Link}
            variant="outlined"
            to="/"
            style={{
              color: "rgba(0, 0, 0, 0.54)",
            }}
          >
            Go Back
          </Button>
        </Typography>
      </div>
    </main>
  );
};

export default NotFound;
