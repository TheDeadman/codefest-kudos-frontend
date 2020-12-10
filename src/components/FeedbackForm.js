import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

export default function FeedbackFormDialog({rowData, setRowData, currentUser}) {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({associateId: "", comment: ""});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const sendFeedback = () => {
        let currentFeedbackData = rowData.filter(row => row.id === formData.associateId)[0];
        
        axios.patch(`http://23.100.225.116:3040/associates/${formData.associateId}`, {points: currentFeedbackData.points + 1, kudos: [...currentFeedbackData.kudos, {comment: formData.comment, commenter: currentUser.name}]}).then(res => {
            setRowData([...rowData.filter(row => row.id !== formData.associateId), res.data].sort((a,b) => b.points - a.points));
            handleClose();
        })
    }

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
                        onChange={(event) => setFormData({...formData, associateId: event.target.value.toUpperCase()})}
                    />
                    <TextField
                        id="associateThankYouMessage"
                        label="Message"
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                        onChange={(event) => setFormData({...formData, comment: event.target.value})}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={sendFeedback} color="primary">
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}