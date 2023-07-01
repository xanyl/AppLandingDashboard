import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import Alert from "@mui/material/Alert";
import { useState } from "react";

function AddTestimonials() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    position: "",
    quote: "",
    img: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      formData.name +
        " " +
        formData.position +
        " " +
        formData.quote +
        " " +
        formData.img
    );

    setSubmitted(true)
    setformData({
      name: "",
      position: "",
      quote: "",
      img: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Typography variant="h4">Add New Testimonial</Typography>

      {submitted ? (
        <Alert severity="success" style={{ color: "green" }}>
          Testimonial Added Successfully
        </Alert>
      ) : (
        ""
      )}

      <form
        autoComplete="off"
        method="POST"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "700px",
        }}
      >
        <TextField
          name="name"
          label="Full Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          name="position"
          label="Position"
          variant="outlined"
          value={formData.position}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          name="quote"
          label="Quote"
          variant="outlined"
          value={formData.quote}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          name="img"
          label="Image URL"
          variant="outlined"
          value={formData.img}
          onChange={handleChange}
          fullWidth
          required
        />

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddTestimonials;
