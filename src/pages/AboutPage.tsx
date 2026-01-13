import {
  Box,
  Container,
  Typography,
  Divider,
  Grid,
  Avatar,
} from "@mui/material";

const AboutPage = () => {
  return (
    <Box
      component="main"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "#fdf8f5",
      }}
    >
      <Container maxWidth="md">
        {/* Title */}
        <Typography
          variant="h3"
          component="h1"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#5d4037" }}
        >
          About TruBute
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#4a3f3a",
            mb: 4,
            fontSize: "1.05rem",
            lineHeight: 1.9,
          }}
        >
          TruBute.com is India’s first digital obituary and memorial platform,
          created to help families honor their loved ones with permanent,
          personalized online tribute pages. We believe every life deserves to
          be remembered — not just for a single day in a newspaper, but forever.
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#4a3f3a", mb: 4, lineHeight: 1.9 }}
        >
          Our platform allows families to create beautiful memorial websites
          featuring life stories, photographs, videos, and messages of
          condolence, all hosted under a unique personal sub-domain such as:
          <br />
          <strong>www.name.trubute.com</strong>
        </Typography>

        <Divider sx={{ my: 6, borderColor: "#e6cfc2" }} />

        {/* Mission */}
        <Typography
          variant="h5"
          component="h2"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#6d4c41" }}
        >
          Our Mission
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#4a3f3a", mb: 4, lineHeight: 1.9 }}
        >
          To preserve every life story with dignity, simplicity, and permanence.
          TruBute bridges the gap between traditional print obituaries and
          modern digital memorials by offering an accessible, respectful
          solution for families and communities.
        </Typography>

        {/* What We Do */}
        <Typography
          variant="h5"
          component="h2"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#6d4c41" }}
        >
          What We Do
        </Typography>

        <Typography sx={{ color: "#4a3f3a", mb: 3, lineHeight: 1.9 }}>
          <strong>Digital Tribute Pages</strong>
          <br />
          Create personalized memorial pages that remain live permanently or
          through an annual renewal plan.
        </Typography>

        <Typography sx={{ color: "#4a3f3a", mb: 3, lineHeight: 1.9 }}>
          <strong>Newspaper Obituary Integration</strong>
          <br />
          Families can request print obituaries directly through TruBute. Local
          newspapers registered on our platform receive verified obituary leads
          and can publish them seamlessly.
        </Typography>

        <Typography sx={{ color: "#4a3f3a", mb: 4, lineHeight: 1.9 }}>
          <strong>Corporate Memorial Solutions</strong>
          <br />
          Organizations can honor employees with structured digital memorial
          pages in a respectful and consistent format.
        </Typography>

        {/* Why TruBute */}
        <Typography
          variant="h5"
          component="h2"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#6d4c41" }}
        >
          Why TruBute
        </Typography>

        <Typography sx={{ color: "#4a3f3a", mb: 4, lineHeight: 1.9 }}>
          • No more temporary newspaper obituaries <br />
          • Permanent, shareable memorial pages <br />
          • Simple and intuitive tribute creation <br />
          • 15-day free trial for every page <br />
          • Affordable annual and lifetime pricing <br />• Trusted by families,
          newspapers, and organizations
        </Typography>

        <Divider sx={{ my: 6, borderColor: "#e6cfc2" }} />

        {/* Vision */}
        <Typography
          variant="h5"
          component="h2"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#6d4c41" }}
        >
          Our Vision
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "#4a3f3a", mb: 6, lineHeight: 1.9 }}
        >
          To build India’s national digital memorial ecosystem — connecting
          families, communities, and newspapers on one respectful platform where
          memories live on forever.
        </Typography>

        <Divider sx={{ my: 6, borderColor: "#e6cfc2" }} />

        {/* Founders */}
        <Typography
          variant="h4"
          component="h2"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#5d4037", textAlign: "center" }}
        >
          Meet the Team
        </Typography>

        <Grid container spacing={6} sx={{ mt: 3 }}>
          {/* Founder / CEO */}
          <Grid size={{ xs: 12, sm: 6 }} textAlign="center">
            <Avatar
              src="/team/ceo.png"
              alt="Founder & CEO"
              sx={{
                width: 120,
                height: 120,
                mx: "auto",
                mb: 2,
                border: "3px solid #e6cfc2",
              }}
            />
            <Typography variant="h6" fontWeight={600} sx={{ color: "#6d4c41" }}>
              Founder & CEO
            </Typography>
            <Typography sx={{ color: "#4a3f3a" }}>(Name)</Typography>
          </Grid>

          {/* CTO */}
          <Grid size={{ xs: 12, sm: 6 }} textAlign="center">
            <Avatar
              src="/team/cto.png"
              alt="CTO"
              sx={{
                width: 120,
                height: 120,
                mx: "auto",
                mb: 2,
                border: "3px solid #e6cfc2",
              }}
            />
            <Typography variant="h6" fontWeight={600} sx={{ color: "#6d4c41" }}>
              Chief Technology Officer
            </Typography>
            <Typography sx={{ color: "#4a3f3a" }}>(Name)</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: "#e6cfc2" }} />

        {/* Closing */}
        <Typography
          variant="body1"
          sx={{
            color: "#7a4a3a",
            fontStyle: "italic",
            textAlign: "center",
            lineHeight: 1.9,
            fontSize: "1.05rem",
          }}
        >
          TruBute was built with empathy at its core — because remembrance is
          not just about loss, but about honoring a life that mattered.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutPage;
