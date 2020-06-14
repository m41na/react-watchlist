import React from "react";
import {PropTypes} from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

 function DashAlert({ type, message, dismissable, action }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert onClose={dismissable? action : null} severity={type}>
        {message}
      </Alert>
    </div>
  );
}

DashAlert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired, 
  dismissable: PropTypes.bool, 
  action: PropTypes.func.isRequired 
}

DashAlert.defaultProps = {
  dismissable: false
}

export default DashAlert;