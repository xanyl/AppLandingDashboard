import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

export default function AddFaqs() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ question: "", answer: ""});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "Question: " +
        formData.question +
        "\nAnswer: " +
        formData.answer 
    );
    setOpen(false); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Stack direction="row" spacing={2} margin="8px">
        <Button variant="contained" onClick={handleClickOpen} endIcon={<AddIcon />}>
          Add
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <DialogTitle>Add Facts</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Fill up the following Form: 
              </DialogContentText>
              <TextField
                onChange={handleChange}
                name='question'
                autoFocus
                margin="dense"
                id="question"
                label="Question"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                onChange={handleChange}
                name='answer'
                autoFocus
                margin="dense"
                id="answer"
                label="Answer"
                type="text"
                fullWidth
                rows={4}
                variant="standard"
              />
              
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </form>
        </Dialog>
        <Button color='error' variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Stack>
    </div>
  );
}
