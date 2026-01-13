import { Box, Typography, IconButton, Stack, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0d47a1",
        color: "#fff",
        py: 4,
        mt: 8,
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        {/* Brand / Tagline */}
        <Typography variant="h6" fontWeight={600}>
          Trubute.com
        </Typography>

        <Typography
          variant="body2"
          sx={{ opacity: 0.9, maxWidth: 500, textAlign: "center" }}
        >
          Create and share meaningful tributes to honor the lives and memories
          of loved ones.
        </Typography>

        {/* Social Icons */}
        <Stack direction="row" spacing={1}>
          <IconButton
            component={Link}
            href="https://www.facebook.com/trubute"
            target="_blank"
            rel="noopener"
            aria-label="Trubute Facebook"
            sx={{
              color: "#fff",
              "&:hover": { color: "#90caf9" },
            }}
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            component={Link}
            href="https://www.instagram.com/trubute"
            target="_blank"
            rel="noopener"
            aria-label="Trubute Instagram"
            sx={{
              color: "#fff",
              "&:hover": { color: "#f48fb1" },
            }}
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            component={Link}
            href="https://www.linkedin.com/company/trubute"
            target="_blank"
            rel="noopener"
            aria-label="Trubute LinkedIn"
            sx={{
              color: "#fff",
              "&:hover": { color: "#64b5f6" },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>

        {/* Copyright */}
        <Typography
          variant="caption"
          sx={{ opacity: 0.8 }}
        >
          © {new Date().getFullYear()} Trubute.com — All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
