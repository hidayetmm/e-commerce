import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    height: "100%",
  },
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
    paddingBottom: "4%",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    width: "60%",
  },
}));
