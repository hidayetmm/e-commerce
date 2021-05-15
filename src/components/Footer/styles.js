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
    marginTop: "auto",
    // border: "1px solid blue !important",
  },
  button: {
    // [theme.breakpoints.down("sm")]: {
    //   marginBottom: "30px",
    // },
  },
  grow: {
    flexGrow: 1,
  },
  socialIcons: {
    display: "inline",
    padding: "0 20px",

    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginBottom: "30px",
    },
  },
}));
