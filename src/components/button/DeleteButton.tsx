import { Button } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";

interface DeleteProps{
  rows : any;
  from : any
}

const DeleteButton: React.FC<DeleteProps> = (rows) => {
  const handleDelete = () => {
    console.log(rows);
  }
return (
    <Button variant="outlined" startIcon={<DeleteIcon />} color="error"
    onClick={handleDelete}
    >
        Delete
      </Button>
  )
}

export default DeleteButton