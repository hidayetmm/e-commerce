import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5, 0),
  },
  title: {
    paddingBottom: "1vh",
  },
  items: {
    paddingTop: "3vh",
  },
  emptyButton: {
    // color: "white",
    // backgroundColor: "#14212d",
    transition: "opacity .3s",
    // padding: "10px 15px",
    "&:hover": {
      opacity: "0.75",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    color: "white",
    backgroundColor: "#14212d",
    transition: "opacity .3s, color .3s",
    // padding: "10px 15px",
    "&:hover": {
      opacity: "0.75",
      backgroundColor: "#14212d",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "5px",
    },
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
}));
