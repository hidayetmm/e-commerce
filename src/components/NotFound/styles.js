import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1, 9, 9, 9),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(5, 6, 9, 6),
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
}));
