import { createTheme } from "@mui/material/styles";

/* ------------------------------------
   BASE TYPOGRAPHY & SHAPE
------------------------------------ */
const base = {
  typography: {
    fontFamily: `"Inter", "Helvetica", "Arial", sans-serif`,

    // ✅ REQUIRED FONT WEIGHTS
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

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
      navbar: {
        background: "#111827",
        border: "#374151",
        logo: "#f9fafb",
        logoAccent: "#e5c07b",
        link: "#d1d5db",
        linkActive: "#e5c07b",
        searchBg: "#1f2937",
        searchButtonBg: "#e5c07b",
        searchButtonHover: "#d4b06a",
        avatarBg: "#e5c07b",
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
    palette: {
      mode: "light",

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
