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
  skeleton: {
    flexGrow: 1,
    padding: theme.spacing(9),
    height: "100%",
  },
}));
