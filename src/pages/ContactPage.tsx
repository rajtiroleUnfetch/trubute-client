import { Box, Container, Typography, Divider, Paper } from "@mui/material";

const ContactPage = () => {
  return (
    <Box
      component="main"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "#fdf8f5", // warm parchment tone
      }}
    >
      <Container maxWidth="sm">
        {/* Title */}
        <Typography
          variant="h3"
          component="h1"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#5d4037", textAlign: "center" }}
        >
          Contact Us
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#4a3f3a",
            textAlign: "center",
            mb: 5,
            lineHeight: 1.8,
          }}
        >
          We understand that reaching out may come at a tender time. Whether you
          have a question, need support, or simply want to share feedback, we
          are here to listen with care and respect.
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            bgcolor: "#ffffff",
            borderRadius: 3,
            border: "1px solid #e6cfc2",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            gutterBottom
            sx={{ color: "#6d4c41" }}
          >
            We’re Here for You
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#4a3f3a", lineHeight: 1.7 }}
          >
            If you need help creating a tribute, have questions about sharing
            memories, or require assistance with your account, please reach out.
            Every message is read with care, and we do our best to respond as
            thoughtfully and promptly as possible.
          </Typography>

          <Divider sx={{ my: 3, borderColor: "#e6cfc2" }} />

          <Typography
            variant="body2"
            sx={{ color: "#4a3f3a", lineHeight: 1.7 }}
          >
            📧 Email us at{" "}
            <a
              href="mailto:support@trubute.com"
              style={{
                color: "#8d6e63",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              support@trubute.com
            </a>
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "#4a3f3a", mt: 1, lineHeight: 1.7 }}
          >
            ⏳ We typically respond within 24–48 hours.
          </Typography>
        </Paper>

        {/* Closing */}
        <Typography
          variant="body2"
          sx={{
            mt: 5,
            textAlign: "center",
            color: "#7a4a3a",
            fontStyle: "italic",
            lineHeight: 1.8,
          }}
        >
          Thank you for trusting Trubute with something so meaningful. We are
          honored to support you.
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactPage;
