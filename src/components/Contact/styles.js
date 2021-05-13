import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  main: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "15rem",
    height: "15rem",
    padding: "2rem 2rem",
  },
  cardMedia: {
    width: "70px",
    height: "70px",
  },
  button: {
    minWidth: "150px",
    color: "white",
    backgroundColor: "#14212d",
    transition: "opacity .3s, color .3s",
    "&:hover": {
      opacity: "0.75",
      backgroundColor: "#14212d",
    },
  },
}));
