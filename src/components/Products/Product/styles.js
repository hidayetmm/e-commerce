import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
  description: {
    height: "2.86em",
    lineHeight: "1.43em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    [theme.breakpoints.down("xs")]: {
      height: "2.86em",
      lineHeight: "1.43em",
      WebkitLineClamp: "1",
    },
  },
}));
