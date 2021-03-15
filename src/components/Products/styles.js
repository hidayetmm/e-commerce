import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(9),
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
  },
}));
