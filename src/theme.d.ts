import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    navbar: {
      background: string;
      border: string;
      logo: string;
      logoAccent: string;
      link: string;
      linkActive: string;
      searchBg: string;
      searchButtonBg: string;
      searchButtonHover: string;
      avatarBg: string;
    };
  }

  interface PaletteOptions {
    navbar?: {
      background?: string;
      border?: string;
      logo?: string;
      logoAccent?: string;
      link?: string;
      linkActive?: string;
      searchBg?: string;
      searchButtonBg?: string;
      searchButtonHover?: string;
      avatarBg?: string;
    };
  }
}
