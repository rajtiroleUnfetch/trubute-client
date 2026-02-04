import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    slug: "how-memorials-help-healing",
    title: "How Memorial Websites Help Healing",
    excerpt:
      "Grief has no timeline. A memorial website becomes a quiet place to return to—where memories speak when words fail.",
    date: "June 12, 2025",
  },
  {
    slug: "preserving-memories-forever",
    title: "Preserving Memories Forever",
    excerpt:
      "When time moves forward, memories deserve a place that does not fade. Digital memorials help love outlive loss.",
    date: "May 28, 2025",
  },
  {
    slug: "why-sharing-grief-matters",
    title: "Why Sharing Grief Brings Comfort",
    excerpt:
      "Grief shared is grief softened. Stories, tributes, and messages remind us we are never alone in remembrance.",
    date: "May 10, 2025",
  },
  {
    slug: "legacy-beyond-lifetime",
    title: "A Legacy Beyond a Lifetime",
    excerpt:
      "A life well lived leaves echoes. Memorial pages preserve those echoes for generations yet to come.",
    date: "April 22, 2025",
  },
];

export default function BlogsPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 } }}>
      {/* Header */}
      <Typography
        variant="h3"
        sx={{ fontWeight: 600, mb: 2, color: theme.palette.text.primary }}
      >
        Stories of Love, Loss, and Remembrance
      </Typography>

      <Typography
        sx={{
          maxWidth: 720,
          mb: 6,
          color: theme.palette.text.secondary,
        }}
      >
        These stories are written for those navigating grief, honoring memories,
        and finding gentle ways to heal. Take your time. Read when you’re ready.
      </Typography>

      {/* Blog Grid */}
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} md={6} key={blog.slug}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: theme.palette.memorial.cardBg,
                border: `1px solid ${theme.palette.memorial.border}`,
                borderRadius: 4,
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: theme.palette.text.secondary,
                    mb: 1,
                  }}
                >
                  {blog.date}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  {blog.title}
                </Typography>

                <Typography sx={{ color: theme.palette.text.secondary }}>
                  {blog.excerpt}
                </Typography>
              </CardContent>

              <Box sx={{ px: 3, pb: 3 }}>
                <Button
                  onClick={() => navigate(`/blogs/${blog.slug}`)}
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  }}
                >
                  Read more →
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
