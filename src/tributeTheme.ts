import { createTheme } from "@mui/material/styles";

/* ------------------------------------
   BASE TYPOGRAPHY & SHAPE
------------------------------------ */

const base = {
  typography: {
    fontFamily: `"Inter", "Helvetica", "Arial", sans-serif`,
    footer: {
      background: "#1565c0", // soft blue-white
      border: "#dbeafe", // light blue border

      text: "#0f172a", // deep navy
      textSecondary: "#334155", // slate blue
      textMuted: "#64748b", // muted blue-gray

      brand: "#0d47a1", // strong memorial blue
      icon: "#1565c0", // lighter blue for icons

      facebook: "#1877f2",
      instagram: "#e1306c", // instagram pink-red for contrast
      linkedin: "#0a66c2",
    },

    memorial: {
      cardBg: "#f8fafc", // soft neutral
      inviteBg: "#eff6ff", // light blue
      photoBg: "#e0f2fe", // photo highlight
      border: "#dbeafe",

      inviteBtnBg: "#0d47a1",
      inviteBtnHover: "#0b3c91",

      facebookBg: "#eaf3ff",
      facebookText: "#1877f2",

      instagramBorder: "#f3c6de",
      instagramHover: "#fdf0f7",
      instagramText: "#c13584",
    },
    // ✅ REQUIRED FONT WEIGHTS
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    navbar: {
      background: "#ffffff",
      border: "#e5e7eb",
      logo: "#1f2937",
      logoAccent: "#1565c0",
      link: "#374151",
      linkActive: "#1565c0",
      searchBg: "#ffffff",
      searchButtonBg: "#1565c0",
      searchButtonHover: "#0d47a1",
      avatarBg: "#1565c0",
    },
    h1: {
      fontSize: "3rem",
      fontWeight: 400,
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.85rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 6,
  },
};

/* ------------------------------------
   DEFAULT (USED WHEN USER PICKS NOTHING)
------------------------------------ */
export const defaultTributeTheme = createTheme({
  ...base,
  palette: {
    mode: "light",
    primary: {
      main: "#7f1d1d", // respectful maroon
    },
    text: {
      primary: "#1f2937", // gray-800
      secondary: "#4b5563", // gray-600
    },
    background: {
      default: "#ffffff",
      paper: "#f9fafb", // gray-50
    },
    divider: "#e5e7eb",
  },
});

/* ------------------------------------
   OTHER THEMES
------------------------------------ */
export const tributeThemes = {
  default: defaultTributeTheme,

  /* ☀️ LIGHT */
  light: createTheme({
    ...base,
    palette: {
      mode: "light",
      primary: {
        main: "#374151", // soft charcoal
      },
      memorial: {
        cardBg: "#ffffff",
        inviteBg: "#f8fafc",
        photoBg: "#f1f5f9",
        border: "#e5e7eb",

        inviteBtnBg: "#334155", // slate
        inviteBtnHover: "#1e293b",

        facebookBg: "#eff6ff",
        facebookText: "#1877f2",

        instagramBorder: "#e5e7eb",
        instagramHover: "#f8fafc",
        instagramText: "#64748b",
      },

      gradients: {
        soft: "linear-gradient(135deg, #fce7f3, #fbcfe8)", // example
      },
      text: {
        primary: "#111827",
        secondary: "#6b7280",
      },
      background: {
        default: "#fafafa",
        paper: "#ffffff",
      },
      divider: "#e5e7eb",
    },
  }),

  /* 🌙 DARK (SOFT, NOT PURE BLACK) */
  dark: createTheme({
    ...base,
    palette: {
      mode: "dark",
      primary: {
        main: "#e5c07b", // warm gold
      },
      memorial: {
        cardBg: "#0f172a", // deep slate
        inviteBg: "#020617", // darker panel
        photoBg: "#1e293b",
        border: "#334155",

        inviteBtnBg: "#38bdf8", // soft cyan
        inviteBtnHover: "#0ea5e9",

        facebookBg: "#1e293b",
        facebookText: "#60a5fa",

        instagramBorder: "#475569",
        instagramHover: "#1e293b",
        instagramText: "#f472b6",
      },

      gradients: {
        soft: "linear-gradient(135deg, #fce7f3, #fbcfe8)", // example
      },
      navbar: {
        background: "#ffffff",
        border: "#e5e7eb",
        logo: "#1f2937",
        logoAccent: "#1565c0",
        link: "#374151",
        linkActive: "#1565c0",
        searchBg: "#ffffff",
        searchButtonBg: "#1565c0",
        searchButtonHover: "#0d47a1",
        avatarBg: "#1565c0",
      },
      text: {
        primary: "#f3f4f6",
        secondary: "#9ca3af",
      },
      background: {
        default: "#111827",
        paper: "#1f2937",
      },
      divider: "#374151",
    },
  }),

  /* 💙 BLUE (CALM & PEACEFUL) */
  blue: createTheme({
    ...base,
    palette: {
      mode: "light",
      primary: { main: "#0d47a1" },
      memorial: {
        cardBg: "#f8fafc", // soft neutral
        inviteBg: "#eff6ff", // light blue
        photoBg: "#e0f2fe", // photo highlight
        border: "#dbeafe",

        inviteBtnBg: "#0d47a1",
        inviteBtnHover: "#0b3c91",

        facebookBg: "#eaf3ff",
        facebookText: "#1877f2",

        instagramBorder: "#f3c6de",
        instagramHover: "#fdf0f7",
        instagramText: "#c13584",
      },
      navbar: {
        background: "#fafafa",
        border: "#374151",
        logo: "#0d47a1",
        logoAccent: "#1565c0",
        link: "#0d47a1",
        linkActive: "#0d47a1",
        searchBg: "#ffffff",
        searchButtonBg: "#1565c0",
        searchButtonHover: "#0d47a1",
        avatarBg: "#1565c0",
      },
      gradients: {
        soft: "linear-gradient(135deg, #fce7f3, #fbcfe8)", // example
      },

      secondary: { main: "#1565c0" },
      background: { default: "#fafafa" },
      text: {
        primary: "#1e293b",
        secondary: "#475569",
      },
      divider: "#dbeafe",
    },
  }),

  pink: createTheme({
    ...base,
    palette: {
      mode: "light",
      navbar: {
        background: "#fff7fb", // blush white (very soft pink)
        border: "#f3c6de", // light rose border

        logo: "#9d174d", // deep rose (brand anchor)
        logoAccent: "#be185d", // rich pink accent

        link: "#6b1f3b", // muted wine (readable)
        linkActive: "#be185d", // strong pink highlight

        searchBg: "#fde8f2", // soft pink input background
        searchButtonBg: "#9d174d", // rose button
        searchButtonHover: "#831843", // darker wine hover

        avatarBg: "#be185d", // consistent accent pink
      },

      footer: {
        background: "#fff7fb", // blush white
        border: "#f3c6de",

        text: "#6b1f3b", // wine
        textSecondary: "#7a2945",
        textMuted: "#9d4b6a",

        brand: "#9d174d", // deep rose
        icon: "#be185d",

        facebook: "#1877f2",
        instagram: "#c13584",
        linkedin: "#0a66c2",
      },

      memorial: {
        // CARDS
        cardBg: "#ff6f61", // very light blush (main card)
        inviteBg: "#ffb3ba", // peach-pink (invite emphasis)
        photoBg: "#ff4c4c", // deeper rosy highlight
        border: "#f1b6cc", // visible pink border

        // PRIMARY ACTION
        inviteBtnBg: "#a11c44", // wine red (strong CTA)
        inviteBtnHover: "#7f1233",

        // FACEBOOK
        facebookBg: "#eef2ff",
        facebookText: "#1877f2",

        // INSTAGRAM
        instagramBorder: "#f28ab2", // vivid pink border
        instagramHover: "#fff0f5", // soft rose hover
        instagramText: "#c2185b", // reddish-pink text
      },

      primary: {
        main: "#b07a8f", // dusty rose (buttons, highlights)
        light: "#e8cfd8",
        dark: "#8e566b",
      },
      gradients: {
        soft: "linear-gradient(135deg, #fce7f3, #fbcfe8)", // example
      },
      secondary: {
        main: "#d6a3b5",
        light: "#f3e2e8",
        dark: "#b98598",
      },

      background: {
        default: "#fff7f9", // very soft pink (page background)
        paper: "#ffffff", // cards remain white (clean & readable)
      },

      text: {
        primary: "#3a2a2f", // soft charcoal-brown (NOT black)
        secondary: "#6d4c57",
      },

      divider: "#efd9e1",
    },

    typography: {
      h1: {
        fontSize: "2.6rem",
        fontWeight: 400,
        color: "#8e566b",
      },

      h2: {
        fontWeight: 500,
      },

      h3: {
        fontWeight: 500,
      },

      h4: {
        fontWeight: 600,
      },

      h5: {
        fontWeight: 600,
      },

      body1: {
        fontSize: "0.95rem",
        lineHeight: 1.75,
        color: "#3a2a2f",
      },

      body2: {
        fontSize: "0.85rem",
        lineHeight: 1.65,
        color: "#6d4c57",
      },
    },

    shape: {
      borderRadius: 10,
    },

    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 24,
            fontWeight: 500,
          },
        },
      },

      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: "#b07a8f",
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 500,
          },
        },
      },
    },
  }),
};

// tributeTheme.ts
export const TtributeThemes = {
  default: tributeThemes.default,
  light: tributeThemes.light,
  dark: tributeThemes.dark,
  blue: tributeThemes.blue,
  pink: tributeThemes.pink,
} as const;

export type TributeThemeKey = keyof typeof tributeThemes;
