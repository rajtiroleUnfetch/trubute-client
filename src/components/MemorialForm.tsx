import React, { useState } from "react";
import toast from "react-hot-toast"
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const MemorialForm: React.FC = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    if (!firstName || !lastName) {
      toast.error("Please enter both first and last names.");
      return;
    }
    // Navigate with query params
    navigate(
      `/create-trubute?first=${encodeURIComponent(firstName)}&last=${encodeURIComponent(lastName)}`,
    );
  };
  return (
    <Box
      sx={{
        backgroundImage: "url('/images/cathy-mu--6gbnkhFtKo-unsplash.jpg')",
        // backgroundImage: "url('/images/jake-colling--dbAuw_PsuQ-unsplash.jpg')",
        // backgroundImage: "url('/images/suhail-mir-t7qzgn4cPo8-unsplash.jpg')",
        // backgroundImage: "url('/images/aman.png')",
        backgroundSize: "cover",
        backgroundPosition: "right 50%",
       // minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={3}
        className="bg-red-500"
        sx={{
          borderRadius: 4,
          p: { xs: 3, md: 6 },
          // maxWidth: 800,
          textAlign: "center",
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(255, 255, 255, 0.45)",
        }}
      >
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Create a Memorial Website
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary", mb: 4 }}>
          PRESERVE AND SHARE MEMORIES OF YOUR LOVED ONE
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 3 }}
        >
          <TextField
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ flex: 1, minWidth: 200 }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ flex: 1, minWidth: 200 }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              bgcolor: "#c49a56",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              borderRadius: 2,
              "&:hover": { bgcolor: "#b48943" },
            }}
          >
            GET STARTED
          </Button>
        </Stack>

        <Button
          variant="outlined"
          endIcon={<span style={{ fontSize: "1.2rem" }}>→</span>}
          sx={{
            borderRadius: 8,
            textTransform: "none",
            px: 3,
            py: 1,
            fontWeight: 500,
          }}
        >
          About online memorials
        </Button>
      </Paper>
    </Box>
  );
};

export default MemorialForm;
