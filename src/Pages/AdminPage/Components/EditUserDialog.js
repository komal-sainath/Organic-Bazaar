import {Dialog,  DialogContent, DialogActions, Button , TextField, DialogTitle } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';


const EditUserDialog = (props) => {   
  const { onClose, open, user } = props;

  const handleClose = () => {
    onClose();
  };
  
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullWidth>
      <DialogTitle id="simple-dialog-title">
        Edit title
      </DialogTitle>
      <DialogContent>
        <TextField
        autoFocus
        InputLabelProps={{ shrink: true }}
        margin="dense"
        id="filled-disabled"
        label="Name"
        type="text"
        helperText={user.name}
        fullWidth
        />
        <TextField
        InputLabelProps={{ shrink: true }}
        autoFocus
        margin="dense"
        id="filled-disabled"
        label="Age"
        type="number"
        helperText={user.age}
        fullWidth
        />
      </DialogContent>
      <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = state => ({
  user: state.adminPage.user,
});


export default connect(mapStateToProps)(EditUserDialog);