import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function SampleMemorialPage() {
  const theme = useTheme();
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ pb: 6 }}>
      {/* Cover */}
      <Box
        sx={{
          height: 260,
          bgcolor: theme.palette.memorial.inviteBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          sx={{
            width: 120,
            height: 120,
            bgcolor: theme.palette.memorial.photoBg,
            mb: 2,
          }}
        />
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          John Michael Doe
        </Typography>
        <Typography sx={{ color: theme.palette.text.secondary }}>
          Forever in our hearts • 1985 – 2024
        </Typography>
      </Box>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        centered
        sx={{ mt: 3 }}
      >
        <Tab label="Tributes" />
        <Tab label="Photos" />
        <Tab label="Videos" />
        <Tab label="Music" />
      </Tabs>

      {/* Content */}
      <Box sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
        {tab === 0 && (
          <Grid container spacing={3}>
            {[1, 2, 3].map((i) => (
              <Grid item xs={12} key={i}>
                <Card
                  sx={{
                    bgcolor: theme.palette.memorial.cardBg,
                    border: `1px solid ${theme.palette.memorial.border}`,
                  }}
                >
                  <CardContent>
                    <Typography sx={{ fontWeight: 600 }}>
                      Family Member
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.secondary }}>
                      You will forever live in our memories. Thank you for the
                      love, laughter, and kindness you shared with us.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {tab === 1 && (
          <Typography sx={{ textAlign: "center", color: theme.palette.text.secondary }}>
            Photo gallery coming soon
          </Typography>
        )}

        {tab === 2 && (
          <Typography sx={{ textAlign: "center", color: theme.palette.text.secondary }}>
            Video memories coming soon
          </Typography>
        )}

        {tab === 3 && (
          <Typography sx={{ textAlign: "center", color: theme.palette.text.secondary }}>
            Music tributes coming soon
          </Typography>
        )}
      </Box>
    </Box>
  );
}
