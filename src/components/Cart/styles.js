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
  grid: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5vh",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: "26%",
    [theme.breakpoints.down("xs")]: {
      height: "14vh",
      flexDirection: "column-reverse",
      marginTop: "10px",
    },
  },
  emptyButton: {
    minWidth: "150px",
    transition: "opacity .3s",
    // padding: "10px 15px",
    "&:hover": {
      opacity: "0.75",
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginRight: "20px",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "15px 0",
    },
  },
  checkoutButton: {
    minWidth: "150px",
    color: "white",
    backgroundColor: "#14212d",
    transition: "opacity .3s, color .3s",
    "&:hover": {
      opacity: "0.75",
      backgroundColor: "#14212d",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "15px 0",
    },
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "5vh",
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));
