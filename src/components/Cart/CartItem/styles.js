import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "auto",
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9 (56.25%)
    backgroundSize: "contain !important",
  },
  cardContent: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    width: "60%",
  },
}));
