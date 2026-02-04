import { Box, Typography, Grid, Card } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 4, md: 8 } }}>

      {/* WHY TRUBUTE EXISTS */}
      <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
        <Grid size={{xs:12,md:6}} >
          <Box
            component="img"
            src="../../public/images/IMG-20260115-WA0005(1).jpg" // replace later
            alt="Family memory"
            sx={{
              width: "100%",
              borderRadius: 3,
              boxShadow: 4,
            }}
          />
        </Grid>

       <Grid size={{xs:12,md:6}} >
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            🌱 Why TruBute Exists
          </Typography>

          <Typography sx={{ mb: 2 }}>
            For decades, obituaries have relied on temporary print formats —
            limited in reach, short in lifespan, and difficult to revisit.
            Families were left without a permanent place to remember, reflect,
            and reconnect.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            TruBute was created to change this.
          </Typography>

          <Typography>
            We combine the emotional depth of remembrance with the simplicity
            of modern technology, transforming traditional obituaries into
            lasting digital legacies — places where love, memory, and meaning
            continue to live.
          </Typography>
        </Grid>
      </Grid>

      {/* WHAT WE DO */}
      <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
        <Grid size={{xs:12,md:6}} >
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            🌍 What We Do
          </Typography>

          <Typography component="ul" sx={{ pl: 3 }}>
            <li>Create personalized digital tribute pages with unique web addresses</li>
            <li>Preserve memories, stories, condolences, photos, and videos permanently</li>
            <li>Enable global access for families, friends, and communities</li>
            <li>Offer a respectful, simple experience during life’s most sensitive moments</li>
          </Typography>

          <Typography sx={{ mt: 3, fontStyle: "italic" }}>
            Each tribute on TruBute is designed to be timeless —
            built with dignity, care, and deep respect.
          </Typography>
        </Grid>

        <Grid size={{xs:12,md:6}} >
          <Box
            component="img"
            src="../../public/images/IMG-20260115-WA0007(1).jpg" // replace later
            alt="Historic family"
            sx={{
              width: "100%",
              borderRadius: 3,
              boxShadow: 4,
            }}
          />
        </Grid>
      </Grid>

      {/* ABOUT TRUBUTE */}
      <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
        <Grid size={{xs:12,md:6}} >
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            About TruBute.com
          </Typography>

          <Typography sx={{ mb: 2 }}>
            TruBute.com is building the future of remembrance.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            We believe every life has a story worth preserving — not just for a
            day, but forever. In a world where memories often fade with time,
            TruBute exists to create a permanent digital space where lives are
            honored, stories are shared, and legacies live on.
          </Typography>

          <Typography>
            TruBute.com is a modern digital obituary and memorial platform
            designed for families, communities, and institutions across the
            world — accessible anytime, anywhere.
          </Typography>
        </Grid>

       <Grid size={{xs:12,md:6}} >
          <Box
            component="img"
            src="../../public/images/IMG-20260115-WA0006(1).jpg" // replace later
            alt="Elderly couple"
            sx={{
              width: "100%",
              borderRadius: 3,
              boxShadow: 4,
            }}
          />
        </Grid>
      </Grid>

      {/* OUR COMMITMENT */}
      <Card
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 4,
          textAlign: "center",
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          💜 Our Commitment
        </Typography>

        <Typography sx={{ mb: 1 }}>
          At TruBute, we are guided by empathy, integrity, and responsibility.
        </Typography>

        <Typography sx={{ mb: 1 }}>
          We understand that behind every tribute is a family, a community,
          and a lifetime of memories.
        </Typography>

        <Typography sx={{ mb: 1 }}>
          This is not just technology.
        </Typography>

        <Typography sx={{ fontWeight: 600 }}>
          This is a responsibility we take seriously.
        </Typography>
      </Card>

      {/* FOOTER BANNER */}
      <Box
        sx={{
          mt: 10,
          p: 4,
          borderRadius: 3,
          textAlign: "center",
          background:
            "linear-gradient(135deg, #4b3f72, #c77dbb)",
          color: "white",
        }}
      >
        <Typography sx={{ fontSize: "1.1rem", fontStyle: "italic" }}>
          TruBute.com is a global digital memorial platform helping families
          preserve memories and honor lives forever — creating a respectful,
          permanent space for remembrance in the modern world.
        </Typography>
      </Box>

    </Box>
  );
}
