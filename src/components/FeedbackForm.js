import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function FeedbackForm() {
    return (
        <FormControl>

            <TextField id="outlined-basic" label="Associate ID" variant="outlined" />

            <TextField
                id="outlined-textarea"
                label="Description"
                multiline
                rows={6}
                variant="outlined"
            />
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </FormControl>
    )
}
