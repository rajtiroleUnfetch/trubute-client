import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
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
    footer?: {
      background: string;
      border: string;
      text: string;
      textSecondary: string;
      textMuted: string;
      brand: string;
      icon: string;
      facebook: string;
      instagram: string;
      linkedin: string;
    };
    memorial: {
      cardBg: string;
      inviteBg: string;
      photoBg: string;
      border: string;

      inviteBtnBg: string;
      inviteBtnHover: string;

      facebookBg: string;
      facebookText: string;

      instagramBorder: string;
      instagramHover: string;
      instagramText: string;
    };
  }

  interface PaletteOptions {
    memorial?: Palette["memorial"];
    navbar?: Palette["navbar"];
    gradients?: any;
    footer?: Partial["footer"];
  }
}
