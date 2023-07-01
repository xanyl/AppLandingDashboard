import { Typography } from "@mui/material"
import AddButton from "../button/AddButton"
import DeleteButton from "../button/DeleteButton"


const AboutContent = () => {
  return (
   <>
     <div style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        margin : '20px',
        gap : '20px',
      }}>
      <AddButton link="/about/add" />
      <DeleteButton />
      </div>
    <Typography variant="h6" component="div">
      About Content
    </Typography>
    </>
  )
}

export default AboutContent