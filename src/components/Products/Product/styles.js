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
    backgroundSize: "contain",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  Content: {
    flexGrow: 1,
  },
  name: {
    width: "60%",
  },
}));
