import {
  Box,
  Card,
  Typography,
  Button,
  Stack,
  Avatar,
  Divider,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

interface Props {
  name: string;
  profileImage?: string;
  memorialUrl: string;
  photos?: string[];
  isSubscribed: boolean;
  views?: number;
  administeredBy?: string;
  memorial?: any;
}

const MemorialSidebar: React.FC<Props> = ({
  name,
  profileImage,
  memorialUrl,
  photos,
  isSubscribed,
  views,
  administeredBy,
  memorial,
}) => {
  const [inviteOpen, setInviteOpen] = useState(false);
const theme=useTheme()

  interface Props {
    open: boolean;
    onClose: () => void;
    name: string;
  }

  const InviteModal: React.FC<Props> = ({ open, onClose, name }) => {
    const memorialUrl = window.location.href;

    const copyLink = async () => {
      await navigator.clipboard.writeText(memorialUrl);
      alert("Link copied 📋");
    };

    const shareFacebook = () => {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          memorialUrl
        )}`,
        "_blank"
      );
    };

    const shareWhatsApp = () => {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(
          `You are invited to remember ${name}\n\n${memorialUrl}`
        )}`,
        "_blank"
      );
    };

    const shareEmail = () => {
      window.location.href = `mailto:?subject=Invitation to ${name}'s memorial&body=Please visit the memorial:\n\n${memorialUrl}`;
    };

    return (
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ fontWeight: 600 }}>
          How would you like to send invitations?
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", right: 12, top: 12 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2}>
            <Button
              fullWidth
              startIcon={<EmailIcon />}
              variant="outlined"
              onClick={shareEmail}
            >
              Invite by Email
            </Button>

            <Button
              fullWidth
              startIcon={<FacebookIcon />}
              variant="outlined"
              onClick={shareFacebook}
            >
              Post to Your Timeline
            </Button>

            <Button
              fullWidth
              startIcon={<WhatsAppIcon />}
              variant="outlined"
              onClick={shareWhatsApp}
            >
              Invite with WhatsApp
            </Button>

            <Box mt={2}>
              <Typography fontWeight={600} mb={1}>
                Share this link
              </Typography>

              <TextField
                fullWidth
                value={memorialUrl}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <IconButton onClick={copyLink}>
                      <ContentCopyIcon />
                    </IconButton>
                  ),
                }}
              />

              <Typography variant="body2" color="text.secondary" mt={1}>
                Share this link to invite people to <strong>{name}'s</strong>{" "}
                memorial.
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
      </Dialog>
    );
  };

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        memorialUrl
      )}`,
      "_blank"
    );
  };
  function generateInstagramCaption(name: string, url: string) {
    return `
In loving memory of ${name} 🤍

A life remembered and celebrated.
Visit the memorial and share your tribute.

🔗 ${url}

#InLovingMemory
#ForeverInOurHearts
#Tribute
#Memorial
#LegacyLivesOn
#Remembering${name.replace(/\s/g, "")}
#GoneButNeverForgotten
`.trim();
  }

  const baseCard = (theme: any) => ({
    borderRadius: 3,
    px: 3,
    py: 3,
    backgroundColor: theme.palette.memorial?.cardBg,
    border: `1px solid ${theme.palette.memorial?.border}`,
  });

  const inviteCard = (theme: any) => ({
    ...baseCard(theme),
    backgroundColor: theme.palette.memorial?.inviteBg,
  });

  const card = (theme: any) => ({
    ...baseCard(theme),
  });

  const inviteBtn =(theme: any)  => ({
    mt: 1,
    py: 1.2,
    fontWeight: 600,
    borderRadius: 2,
    backgroundColor: theme.palette?.memorial?.inviteBtnBg,
    color: theme.palette.memorial?.inviteBtnText,
    "&:hover": {
      backgroundColor: theme.palette.memorial?.inviteBtnHover,
    },
  });
  const photoCard = (theme: any) => ({
    ...baseCard(theme),
    backgroundColor: theme.palette.memorial?.photoBg,
  });
  const fbBtn = (theme: any) => ({
    mb: 1,
    py: 1.1,
    borderRadius: 2,
    backgroundColor: theme.palette.memorial?.facebookBg,
    color: theme.palette.memorial?.facebookText,
    fontWeight: 600,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  });
  const instaBtn = (theme: any) => ({
    py: 1.1,
    borderRadius: 2,
    fontWeight: 600,
    color: theme.palette.memorial?.instagramText,
    border: `1px solid ${theme.palette.memorial?.instagramBorder}`,
    "&:hover": {
      backgroundColor: theme.palette.memorial?.instagramHover,
    },
  });
  const subscribeBtn = {
    borderRadius: 2,
    fontWeight: 600,
  };

  const shareInstagram = () => {
    const caption = generateInstagramCaption(name, memorialUrl);
    navigator.clipboard.writeText(caption);
    alert("Instagram caption copied 📋");
  };

  return (
    <Stack spacing={3} sx={{ position: "sticky", top: 24 }}>
      {/* Invite */}
      <Card sx={inviteCard(theme)}>
        <Typography fontWeight={600}>
          Invite {name}'s family and friends
        </Typography>

        <Button
          fullWidth
          startIcon={<PersonAddIcon />}
          sx={inviteBtn(theme)}
          onClick={() => setInviteOpen(true)}
        >
          Invite now
        </Button>
      </Card>

      {/* Share */}
      <Card sx={card(theme)}>
        <Button
          fullWidth
          startIcon={<FacebookIcon />}
          sx={fbBtn(theme)}
          onClick={shareFacebook}
        >
          Share on Facebook
        </Button>

        <Button fullWidth onClick={shareInstagram} sx={instaBtn(theme)}>
          Share on Instagram
        </Button>
      </Card>

      {/* Photos */}
      <Card sx={photoCard(theme)}>
        <Typography fontWeight={600} mb={2}>
          {photos?.length} Photos
        </Typography>

        {photos?.[0] && (
          <Avatar
            variant="rounded"
            src={photos[0]}
            sx={{ width: "100%", height: 150 }}
          />
        )}
      </Card>

      {/* Footer Info */}
      <Box textAlign="center" fontSize={13} color="text.secondary">
        {administeredBy && (
          <>
            This website is administered by:
            <br />
            <strong>{administeredBy}</strong>
            <Divider sx={{ my: 1 }} />
          </>
        )}

        {views && <>{views.toLocaleString()} Views</>}
      </Box>
      <InviteModal
        open={inviteOpen}
        onClose={() => setInviteOpen(false)}
        name={name}
      />
    </Stack>
  );
};

export default MemorialSidebar;
