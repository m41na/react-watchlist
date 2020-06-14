import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: "1 1 100%",
  },
}));

const DataDetails = (props) => {
  const classes = useToolbarStyles();
  const { dataSelected } = props;

  return (
    <Toolbar className={classes.root}>
      {dataSelected && (
        <>
          <Typography
            className={classes.title}
            color="inherit"
            variant="h6"
            component="div"
          >
            Date: {dataSelected.Date}
          </Typography>
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Adj Close: {dataSelected["Adj Close"]}
          </Typography>
        </>
      )}
      {!dataSelected && (
        <Typography
            className={classes.title}
            color="secondary"
            variant="subtitle2"
            component="div"
          >
            Select table row to view full details
          </Typography>
      )}
    </Toolbar>
  );
};

DataDetails.propTypes = {
  dataSelected: PropTypes.shape({
    Date: PropTypes.string,
    Open: PropTypes.string,
    High: PropTypes.string,
    Low: PropTypes.string,
    Close: PropTypes.string,
    "Adj Close": PropTypes.string,
    Volume: PropTypes.string,
  }),
};

export default DataDetails;
