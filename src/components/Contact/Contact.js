import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import callCenter from "../../assets/callCenter.svg";
import chat from "../../assets/chat.svg";

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.main}>
        <Container className={classes.container}>
          <Grid
            justify="center"
            alignItems="center"
            container
            className={classes.grid}
            spacing={3}
          >
            <Grid item>
              <Card variant="outlined" className={classes.card}>
                <CardMedia image={callCenter} className={classes.cardMedia} />
                <CardContent>
                  <Typography variant="h6">Contact Support</Typography>
                  <Typography variant="subtitle2">
                    Get in touch with our customer support team.
                  </Typography>
                </CardContent>
                <Button
                  size="large"
                  className={classes.button}
                  aria-label="Contact"
                  disableElevation
                  disableRipple
                >
                  Give a call
                </Button>
              </Card>
            </Grid>
            <Grid item>
              <Card variant="outlined" className={classes.card}>
                <CardMedia image={chat} className={classes.cardMedia} />
                <CardContent>
                  <Typography variant="h6">Social Media</Typography>
                  <Typography variant="subtitle2">
                    Contact on Social Media accounts
                  </Typography>
                </CardContent>
                <Button
                  size="large"
                  className={classes.button}
                  aria-label="Contact"
                  disableElevation
                  disableRipple
                >
                  Send a message
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Contact;
