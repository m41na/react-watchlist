import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  fab: {
    "& > *": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(2),
    },
  },
  dropdown: {
    "& > *": {
      margin: theme.spacing(1),
      marginRight: theme.spacing(2),
    },
    display: "flex",
    flexDirection: "row-reverse",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginRight: theme.spacing(2),
  },
}));
