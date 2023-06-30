import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";


const CustomButton = () => {
    return (
        <Stack direction="row" spacing={2} margin="8px">
            <Button variant="contained" endIcon={<AddIcon />}>
                Add
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
        </Stack>
    )
}

export default CustomButton