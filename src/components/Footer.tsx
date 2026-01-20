import {
  Box,
  Typography,
  IconButton,
  Stack,
  Link,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const theme = useTheme();
  const footer = theme.palette.footer;
console.log('theme',theme);

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: footer?.background,
        color: footer?.text,
        py: 4,
        mt: 8,
        borderTop: `1px solid ${footer?.border}`,
      }}
    >
      <Stack spacing={2} alignItems="center">
        {/* Brand */}
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ color: footer?.brand }}
        >
          Trubute.com
        </Typography>

        {/* Tagline */}
        <Typography
          variant="body2"
          sx={{
            color: footer?.textSecondary,
            maxWidth: 520,
            textAlign: "center",
          }}
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
            sx={{
              color: footer?.icon,
              "&:hover": { color: footer?.facebook },
            }}
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            component={Link}
            href="https://www.instagram.com/trubute"
            target="_blank"
            sx={{
              color: footer?.icon,
              "&:hover": { color: footer?.instagram },
            }}
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            component={Link}
            href="https://www.linkedin.com/company/trubute"
            target="_blank"
            sx={{
              color: footer?.icon,
              "&:hover": { color: footer?.linkedin },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>

        {/* Copyright */}
        <Typography variant="caption" sx={{ color: footer?.textMuted }}>
          © {new Date().getFullYear()} Trubute.com — All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
