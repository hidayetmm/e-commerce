import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  button: {
    color: "white",
    backgroundColor: "#14212d",
    transition: "opacity .3s, color .3s",
    // padding: "10px 15px",
    "&:hover": {
      opacity: "0.75",
      backgroundColor: "#14212d",
    },
  },
}));
