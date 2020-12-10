import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Create Review
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create Review</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Use this form to acknowledge a fellow associate for going above and beyond and exceeding your expectations.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="associateId"
                        label="Associate ID"
                        type="email"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="associateThankYouMessage"
                        label="Message"
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleClose} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}