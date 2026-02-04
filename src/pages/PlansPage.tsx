import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const plans = [
  {
    name: "Free Trial",
    id: "Free",
    price: "Free",
    subText:
      "A gentle beginning. After 15 days, the memorial rests quietly unless you choose to continue.",
    details: [
      "A simple digital tribute page",
      "Photo & life story section",
      "Condolence messages from loved ones",
      "Unique memorial link (name.tribute.com)",
    ],
    highlight: false,
  },
  {
    name: "Annual Tribute Plan",
    id: "Premium",
    price: "₹999 / year",
    subText:
      "Most chosen by families — a full year to remember, reflect, and heal together.",
    details: [
      "Active memorial for one full year",
      "Easy sharing via WhatsApp & social media",
      "Unlimited photos, stories, and messages",
      "Edit and update the tribute anytime",
      "Visible to family and friends during the plan",
      "Priority support when you need help",
    ],
    highlight: true,
  },
  {
    name: "Permanent Tribute Plan",
    id: "Lifetime",
    price: "₹4,999 (one-time)",
    subText:
      "A lifetime digital legacy — because some memories deserve to live forever.",
    details: [
      "Lifetime memorial page & hosting",
      "No renewals. No interruptions.",
      "A permanent place for remembrance",
      "Unlimited photos, messages, and stories",
      "Editable anytime, by family",
      "Priority support with personal care",
      "Optional ‘Legacy Tribute’ recognition",
      "Easy sharing with loved ones, anytime",
    ],
    highlight: false,
  },
];

export default function PlansPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
        bgcolor: theme.palette.background.default,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 600,
          mb: 2,
          color: theme.palette.text.primary,
        }}
      >
        Choose How a Life Is Remembered
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          maxWidth: 720,
          mx: "auto",
          mb: 6,
          color: theme.palette.text.secondary,
        }}
      >
        Every life leaves a mark. Whether for a moment, a year, or a lifetime,
        your memorial becomes a shared space for love, stories, and healing.
      </Typography>

      {/* Plans */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {plans.map((plan) => (
          <Card
            key={plan.id}
            sx={{
              maxWidth: 360,
              flex: 1,
              borderRadius: 4,
              position: "relative",
              bgcolor: theme.palette.memorial.cardBg,
              border: plan.highlight
                ? `2px solid ${theme.palette.primary.main}`
                : `1px solid ${theme.palette.memorial.border}`,
            }}
          >
            {plan.highlight && (
              <Chip
                label="Most Chosen by Families"
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  bgcolor: theme.palette.primary.main,
                  color: "#fff",
                }}
              />
            )}

            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, mb: 1 }}
              >
                {plan.name}
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.primary.main,
                  mb: 1,
                }}
              >
                {plan.price}
              </Typography>

              <Typography
                sx={{
                  mb: 3,
                  color: theme.palette.text.secondary,
                }}
              >
                {plan.subText}
              </Typography>

              <Box sx={{ mb: 3 }}>
                {plan.details.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      mb: 1,
                      color: theme.palette.text.secondary,
                      fontSize: 14,
                    }}
                  >
                    • {item}
                  </Typography>
                ))}
              </Box>

            </CardContent>
          </Card>
        ))}
      </Stack>

              <Button
                fullWidth
                sx={{
                  py: 1.2,
                  mt:4,
                  fontWeight: 600,
                  bgcolor:  theme.palette.primary.main,
                  color: "#fff",
                  "&:hover": {
                    bgcolor: theme.palette.primary.dark,
                  },
                }}
              >
                Create Memorial
              </Button>
      {/* Footer note */}
      <Typography
        sx={{
          mt: 6,
          textAlign: "center",
          fontSize: 14,
          color: theme.palette.text.secondary,
        }}
      >
        We believe remembrance should be respectful, private, and free from ads —
        always.
      </Typography>
    </Box>
  );
}
