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
  //   default: defaultTributeTheme,

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
  default: createTheme({
    ...base,
    palette: {
      mode: "light",

      /* =========================
       CORE COLORS (FROM SS)
    ========================= */
      primary: {
        main: "#7b4a2e", // warm brown heading color
        light: "#a6785a",
        dark: "#5a341f",
      },

      secondary: {
        main: "#c08a7a", // muted rose / clay pink
        light: "#e5c1b7",
        dark: "#9b5f52",
      },

      background: {
        default: "#faf6f1", // parchment white
        paper: "#ffffff",
      },

      text: {
        primary: "#3a2720", // espresso brown
        secondary: "#6a4a3a",
      },

      divider: "#e4d4c6",

      /* =========================
       NAVBAR
    ========================= */
      navbar: {
        background: "#f4eee7",
        border: "#e0cfc0",

        logo: "#7b4a2e",
        logoAccent: "#9c5c3a",

        link: "#5c4033",
        linkActive: "#7b4a2e",

        searchBg: "#efe4da",
        searchButtonBg: "#7b4a2e",
        searchButtonHover: "#5a341f",

        avatarBg: "#9c5c3a",
      },

      /* =========================
       FOOTER
    ========================= */
      footer: {
        background: "#f4eee7",
        border: "#e0cfc0",

        text: "#5c4033",
        textSecondary: "#7a5a48",
        textMuted: "#9b7a66",

        brand: "#7b4a2e",
        icon: "#9c5c3a",

        facebook: "#1877f2",
        instagram: "#c13584",
        linkedin: "#0a66c2",
      },

      /* =========================
       MEMORIAL SECTIONS
    ========================= */
      memorial: {
        cardBg: "#fdfaf7", // soft card white
        inviteBg: "#efe1d6", // invite panel beige
        photoBg: "#ead8ca", // photo placeholder bg
        border: "#e4d4c6",

        inviteBtnBg: "#7b4a2e",
        inviteBtnHover: "#5a341f",

        facebookBg: "#f1f5ff",
        facebookText: "#1877f2",

        instagramBorder: "#c08a7a",
        instagramHover: "#fbf1ee",
        instagramText: "#9b5f52",
      },

      gradients: {
        soft: "linear-gradient(180deg, #faf6f1, #f4eee7)",
      },
    },

    /* =========================
     TYPOGRAPHY
  ========================= */
    typography: {
      fontFamily: `"Libre Baskerville", Georgia, serif`,

      h1: {
        fontFamily: `"Playfair Display", serif`,
        fontWeight: 400,
      },

      h2: {
        fontFamily: `"Playfair Display", serif`,
        fontWeight: 500,
      },

      h3: {
        fontFamily: `"Playfair Display", serif`,
        fontWeight: 500,
      },

      body1: {
        fontFamily: `"Libre Baskerville", serif`,
      },

      body2: {
        fontFamily: `"Libre Baskerville", serif`,
      },
    },

    shape: {
      borderRadius: 12,
    },

    /* =========================
     COMPONENT OVERRIDES
  ========================= */
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            border: "1px solid #e4d4c6",
            boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
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
            backgroundColor: "#7b4a2e",
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
