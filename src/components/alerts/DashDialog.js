import React, {useEffect} from 'react';
import {PropTypes} from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DashDialog({show, message, accept, decline, onAccept}) {
  const [open, setOpen] = React.useState(show);

  useEffect(() => {
      setOpen(show)
  }, [show]);

  const handleClose = () => {
    setOpen(false);
    onAccept(false)
  };

  const handleAccept = () => {
      setOpen(false);
      onAccept(true);
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm removing Symbol"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {decline}
          </Button>
          <Button onClick={handleAccept} color="primary" autoFocus>
            {accept}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DashDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  accept: PropTypes.string, 
  decline: PropTypes.string, 
  onAccept: PropTypes.func.isRequired
}

DashDialog.defaultProps = {
  accept: "Yes",
  decline: "No"
}

export default DashDialog;