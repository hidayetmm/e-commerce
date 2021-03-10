import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  footer: {
    boxShadow: "none",
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px",
    },
  },
  grow: {
    flexGrow: 1,
  },
}));
