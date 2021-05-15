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
                  href="tel:0513300091"
                >
                  Give a call
                </Button>
              </Card>
            </Grid>
            <Grid item>
              <Card variant="outlined" className={classes.card}>
                <CardMedia image={chat} className={classes.cardMedia} />
                <CardContent>
                  <Typography variant="h6">Drop a message</Typography>
                  <Typography variant="subtitle2">
                    Contact on Whatsapp, we'll get back to you soon.
                  </Typography>
                </CardContent>
                <Button
                  size="large"
                  className={classes.button}
                  aria-label="Contact"
                  disableElevation
                  disableRipple
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=+994513300091"
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
