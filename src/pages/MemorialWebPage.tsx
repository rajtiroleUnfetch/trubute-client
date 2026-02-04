import {
  Box,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Button,
  Divider,
  Stack,
  Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import MemorialHero from "../components/MemorialHero";

export default function SampleMemorialPage() {
  const theme = useTheme();
  const [tab, setTab] = useState(0);
  const memorial = {
    _id: "6971c3a3da8cd07cc2d24f9c",
    firstName: "test2",
    lastName: "name last",
    gender: "male",
    relationship: "Friend",
    designation: "Doctor",
    specialDesignation: "My close friend",
    moreDetails:
      "This memorial website was created by the Association of General Practitioners of Jamaica and the Caribbean College of Family Physicians Secretariat in memory of our Member and Colleague, DOCTOR VELMA YVONNE NICHOLSON-LEE.  To her patients from Saint Thomas, Harbour View, Bull Bay,  Shooters Hill, Port Royal and those who moved away and came to her for medical attention from all across the island, just for their check up - The Association of General Practitioners of Jamaica and the Caribbean College of Family Physicians extend our condolences to you on the passing of our Stalwart Physician. We will remember her forever. May she rest in Peace and her Light perpetually shines! Sail on Silver Bird!",
    title: "MRRRR",
    description:
      "My life was devoted to the care of others, amid their cries, hopes, and the world’s bustle. Now I ask for no ceremony, no gathering — only silence, away from noise and duty, to finally rest in peace",
    location: "khandwa",
    status: "approved",
    bornDay: "2025-12-31T18:30:00.000Z",
    passedDay: "2026-01-14T18:30:00.000Z",
    website: "test2-name-last",
    plan: "free",
    paymentStatus: "free",
    theme: "default",
    privacy: "public",
    createdBy: "691976d66bab37957b384a11",
    approved: false,
    tributes: [],
    createdAt: "2026-01-22T06:28:51.539Z",
    updatedAt: "2026-01-28T07:04:48.631Z",
    __v: 0,
    profile:
      "https://trubute-data.s3.us-east-1.amazonaws.com/memorial-media/1769063637219.png",
    backgroud:
      "https://trubute-data.s3.us-east-1.amazonaws.com/memorial-media/1769244217391.png",
  };

  return (
    <Box sx={{ bgcolor: "#faf7f3", minHeight: "100vh", pb: 6 }}>
      {/* PAGE HEADING */}
      <Box
        sx={{
          px: 3,
          pt: 5,
          pb: 4,
          maxWidth: 1100,
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            mb: 1.5,
            color: theme.palette.text.primary,
          }}
        >
          A Place to Remember, Together
        </Typography>

        <Typography
          sx={{
            fontSize: 18,
            maxWidth: 720,
            mx: "auto",
            color: theme.palette.text.secondary,
            mb: 3,
            lineHeight: 1.7,
          }}
        >
          A gentle space where love, memories, and stories live on — created to
          honor a life that will always matter.
        </Typography>

        <Typography
          sx={{
            maxWidth: 820,
            mx: "auto",
            color: theme.palette.text.secondary,
            lineHeight: 1.8,
            fontSize: 15,
          }}
        >
          You are viewing a <b>sample memorial page</b>. This preview shows how
          your loved one’s memorial can appear — personalized with their name,
          story, photos, and messages from family and friends.
          <br />
          <br />
          When you create a memorial, this space becomes uniquely yours — shaped
          by memories, shared moments, and the love that continues beyond loss.
        </Typography>
      </Box>

      {/* INTRO – WHY MEMORIAL */}
      <Box
        sx={{
          px: 3,
          pt: 3,
          pb: 2,
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        <Card
          sx={{
            bgcolor: "#fffdf9",
            borderRadius: 3,
            border: "1px solid #efe6da",
          }}
        >
          <CardContent sx={{ px: { xs: 3, md: 5 }, py: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
              A space to remember, together
            </Typography>

            <Typography
              sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              Losing a loved one is incredibly painful — and deeply personal.
              <br />
              <br />
              At <b>Tribute.com</b>, we provide a shared, gentle, and easily
              accessible virtual space where family and friends can honor a
              special life. A place to heal together by sharing feelings, warm
              memories, and words of love and support.
            </Typography>

            <Typography
              sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              Creating a memorial website takes only a few minutes. It is simple
              to use, thoughtfully designed, and never contains ads. Your loved
              one’s tribute remains focused on what truly matters — remembrance,
              connection, and care.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              Share memories
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, mb: 2 }}>
              Share stories, tributes, photos, music, and videos that celebrate
              the life of someone who will always be remembered.
            </Typography>

            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              Personalize your memorial
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, mb: 2 }}>
              Choose themes, a personalized URL, title phrases, and privacy
              settings — creating a space that truly reflects the life and
              personality being honored.
            </Typography>

            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              Invite and collaborate
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary, mb: 2 }}>
              Memorials are meant to be built together. Invite family, friends,
              and colleagues to contribute messages, photos, and stories — a
              powerful way to support one another during a difficult time.
            </Typography>

            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              A safe space for shared memories
            </Typography>
            <Typography sx={{ color: theme.palette.text.secondary }}>
              You decide who can view and contribute. Keep the memorial private,
              share it only with loved ones, or make it public when you’re
              ready.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 3 }}
            >
              <Typography
                sx={{ fontSize: 13, color: theme.palette.text.secondary }}
              >
                • Visible only to me
              </Typography>
              <Typography
                sx={{ fontSize: 13, color: theme.palette.text.secondary }}
              >
                • Shared with family and friends
              </Typography>
              <Typography
                sx={{ fontSize: 13, color: theme.palette.text.secondary }}
              >
                • Open for all visitors to view and contribute
              </Typography>
            </Stack>

            <Typography
              sx={{
                mt: 3,
                fontStyle: "italic",
                color: theme.palette.text.secondary,
              }}
            >
              You are not alone. Be supported by a caring community that
              understands remembrance, love, and loss.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* SAMPLE NOTICE */}
      <Box sx={{ px: 3, pt: 3 }}>
        <Alert
          severity="info"
          sx={{
            bgcolor: "#fdf4ec",
            color: "#6b4a2d",
            border: "1px solid #f1e2d2",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            This is a sample memorial page
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            The page you are viewing is only a preview. When you create a
            memorial, your loved one’s name, photos, stories, and tributes will
            appear here — personalized and private.
          </Typography>
        </Alert>
      </Box>

      {/* Header */}
      {/* <Box
        sx={{
          height: 220,
          borderRadius: 2,
          mx: 3,
          mt: 3,
          mb: 4,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/memorial-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      > */}
      <Box   sx={{
          borderRadius: 2,
          mx: 3,
          mt: 3,
          mb: 4}}>
          <MemorialHero memorial={memorial} refetch={()=>{}} />
      </Box>
        {/* <Box>
            
          <Typography variant="h3" sx={{ color: "#fff", fontWeight: 500 }}>
            test2 name last
          </Typography>
          <Typography sx={{ color: "#eee", mt: 1 }}>
            2026 – 2026
          </Typography>
        </Box> */}
      {/* </Box> */}

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        sx={{
          px: 3,
          mb: 3,
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 500,
          },
        }}
      >
        <Tab label="About" />
        <Tab label="Messages" />
        <Tab label="Photos" />
        <Tab label="Videos" />
        <Tab label="Audio" />
      </Tabs>

      {/* Main Layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2.5fr 1fr" },
          gap: 4,
          px: 3,
        }}
      >
        {/* LEFT CONTENT */}
        <Box>
          {tab === 0 && (
            <Stack spacing={4}>
              {/* ABOUT MEMORIAL */}
              <Card
                sx={{
                  bgcolor: "#fffdf9",
                  borderRadius: 3,
                  border: "1px solid #efe6da",
                }}
              >
                <CardContent sx={{ px: 4, py: 5 }}>
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 500 }}>
                    Honoring the Life of test2 name last
                  </Typography>

                  <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    A Life Remembered
                  </Typography>

                  <Typography
                    sx={{ color: theme.palette.text.secondary, mb: 3 }}
                  >
                    test2 name last was more than a name — a presence remembered
                    for warmth, devotion, and quiet strength.
                    <br />
                    <br />
                    Known as a <b>Doctor</b> and cherished as a <b>Friend</b>,
                    their life reflected care in every role they embraced. Home
                    was found in Khandwa, a place where ordinary days became
                    lasting memories.
                  </Typography>

                  <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    Where the Journey Began
                  </Typography>

                  <Typography
                    sx={{ color: theme.palette.text.secondary, mb: 3 }}
                  >
                    Born on 01 Jan 2026, a journey began — quietly and gently.
                    From those early moments grew a life that would touch many
                    and be remembered always.
                  </Typography>

                  <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    In Loving Memory
                  </Typography>

                  <Typography sx={{ color: theme.palette.text.secondary }}>
                    On 15 Jan 2026, they stepped beyond this world and into
                    eternal rest. Though no longer seen, their spirit remains —
                    carried forward through love, remembrance, and gratitude.
                  </Typography>
                </CardContent>
              </Card>

              {/* WHY CREATE */}
              <Card
                sx={{
                  bgcolor: "#fdf4ec",
                  borderRadius: 3,
                  border: "1px solid #f1e2d2",
                }}
              >
                <CardContent sx={{ px: 4, py: 4 }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
                    Why create a memorial?
                  </Typography>

                  <Typography
                    sx={{ color: theme.palette.text.secondary, mb: 2 }}
                  >
                    Some lives are too meaningful to fade into silence. A
                    memorial gives memories a place to live — gently,
                    permanently, and together.
                  </Typography>

                  <Typography sx={{ color: theme.palette.text.secondary }}>
                    • Share stories that deserve to be remembered
                    <br />
                    • Invite family and friends from anywhere in the world
                    <br />
                    • Preserve photos, messages, music, and videos
                    <br />• Create a safe, private space for healing and love
                  </Typography>
                </CardContent>
              </Card>

              {/* HOW IT WORKS */}
              <Card sx={{ borderRadius: 3 }}>
                <CardContent sx={{ px: 4, py: 4 }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
                    How your memorial is created
                  </Typography>

                  <Typography sx={{ color: theme.palette.text.secondary }}>
                    1. Add your loved one’s name and basic details
                    <br />
                    2. Write their life story — or keep it simple
                    <br />
                    3. Invite family and friends to share tributes
                    <br />
                    4. Edit and grow the memorial anytime
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          )}

          {tab !== 0 && (
            <Typography sx={{ color: theme.palette.text.secondary }}>
              This section will contain memories shared by loved ones —
              messages, photos, videos, and audio that keep their presence
              alive.
            </Typography>
          )}
        </Box>

        {/* RIGHT SIDEBAR */}
        <Stack spacing={3}>
          <Card sx={{ bgcolor: "#e8d8c8", borderRadius: 3 }}>
            <CardContent>
              <Typography sx={{ fontWeight: 600, mb: 2 }}>
                Invite family and friends
              </Typography>

              <Button
                fullWidth
                sx={{
                  bgcolor: "#8b5a3c",
                  color: "#fff",
                  "&:hover": { bgcolor: "#7a4c32" },
                }}
              >
                Invite Others
              </Button>
            </CardContent>
          </Card>

          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Button
                fullWidth
                sx={{
                  mb: 1,
                  bgcolor: "#1877f2",
                  color: "#fff",
                }}
              >
                Share on Facebook
              </Button>

              <Button
                fullWidth
                variant="outlined"
                sx={{
                  borderColor: "#c13584",
                  color: "#c13584",
                }}
              >
                Share on Instagram
              </Button>
            </CardContent>
          </Card>

          <Divider />

          <Typography
            sx={{ fontSize: 12, color: theme.palette.text.secondary }}
          >
            This is a sample memorial page.
            <br />
            Your memorial will be personalized and private.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
