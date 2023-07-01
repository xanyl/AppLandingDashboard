import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
 
interface Props {
  link : string;
}

const AddButton :React.FC<Props> = ({link}) => {
  return (
        <Link to={link}>
        <Button variant="contained" endIcon={<AddIcon />}>
          Add
        </Button></Link>
  );
};

export default AddButton;
