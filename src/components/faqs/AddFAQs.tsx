import { Alert, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import { useState } from "react";

function AddFAQs() {
    const [submitted, setSubmitted] = useState(false);
  const [formData, setformData] = useState({ question: "", answer: "" });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(formData.question + " " + formData.answer);
    setSubmitted(true);
    setformData({ question: "", answer: "" });
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
      <Typography variant="h4">Add New FAQ</Typography>

      {submitted ? (
        <Alert severity="success" style={{ color: "green" }}>
          FAQ Added Successfully
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
          name="question"
          label="Question"
          variant="outlined"
          value={formData.question}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          name="answer"
          label="Answer"
          variant="outlined"
          value={formData.answer}
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

export default AddFAQs;
