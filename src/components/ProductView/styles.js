import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4, 0, 10, 0),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(5, 0, 5, 0),
    },
  },
  root: {
    flexGrow: 1,
  },
  loader: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(10),
    height: "40vh",
    "& span": {
      borderRadius: "0% !important",
      animationDuration: "1.7s",
    },
  },
  svg: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  root: {
    maxWidth: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  media: {
    // height: 0,
    // paddingTop: "100%", // 16:9 (56.25%)
    // backgroundSize: "contain !important",
    //
    // display: "table-cell",
    // position: "relative",
    height: "82vh",
    // verticalAlign: "middle",
    // textAlign: "center",
  },
  magnifier: {
    height: "100% !important",
    width: "100% !important",
    "& img": {
      objectFit: "contain",
    },
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  Content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxWidth: "37%",
    width: "fill-available",
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
  button: {
    color: "white",
    backgroundColor: "#14212d",
    transition: "opacity .3s, color .3s",
    padding: "10px 15px",
    "&:hover": {
      opacity: "0.75",
      backgroundColor: "#14212d",
    },
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
