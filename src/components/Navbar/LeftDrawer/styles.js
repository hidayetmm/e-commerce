import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  drawerPaper: {
    width: "50vw",
  },
  navTitle: {
    alignItems: "center",
    // display: "flex",
    textDecoration: "none",
    transitionDuration: "0.3s",
    "&:hover": {
      opacity: "0.65",
    },
    "&:active": {
      transform: "scale(0.97)",
    },
  },
}));
