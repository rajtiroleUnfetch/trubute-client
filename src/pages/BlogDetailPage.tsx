import { Box, Typography, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function BlogDetailPage() {
  const theme = useTheme();

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 }, maxWidth: 900, mx: "auto" }}>
      <Typography
        sx={{ color: theme.palette.text.secondary, mb: 1 }}
      >
        June 12, 2025
      </Typography>

      <Typography
        variant="h3"
        sx={{ fontWeight: 600, mb: 3 }}
      >
        How Memorial Websites Help Healing
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography sx={{ mb: 3, color: theme.palette.text.secondary }}>
        Grief does not follow rules. It arrives quietly, stays longer than expected,
        and leaves traces in places we never imagined.
      </Typography>

      <Typography sx={{ mb: 3, color: theme.palette.text.secondary }}>
        A memorial website is not about holding onto pain—it is about giving love
        a place to rest. A place where stories can be told again. Where photographs
        feel like conversations. Where a name is spoken, not forgotten.
      </Typography>

      <Typography sx={{ mb: 3, color: theme.palette.text.secondary }}>
        When friends and family contribute tributes, something gentle happens.
        Grief becomes shared. Memories overlap. And slowly, healing begins—not
        because the loss is gone, but because love remains.
      </Typography>

      <Typography sx={{ mb: 3, color: theme.palette.text.secondary }}>
        Memorials remind us that while life ends, connection does not. And sometimes,
        that reminder is enough to carry us through another day.
      </Typography>

      <Typography
        sx={{
          mt: 6,
          fontStyle: "italic",
          color: theme.palette.text.secondary,
        }}
      >
        “What we once enjoyed deeply, we can never lose. All that we love deeply
        becomes a part of us.”
      </Typography>
    </Box>
  );
}
