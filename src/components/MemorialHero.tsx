// import {
//   Box,
//   Typography,
//   Avatar,
//   IconButton,
// } from "@mui/material";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";
// import axiosInstance from "../api/axiosInstance";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useAuth } from "../hooks/useAuth";
// import { useRef, useState } from "react";

// interface Props {
//   memorial: any;
// }

// const MemorialHero = ({ memorial }: Props) => {
//   const { user } = useAuth();
//   const queryClient = useQueryClient();

//   const heroInputRef = useRef<HTMLInputElement | null>(null);
//   const profileInputRef = useRef<HTMLInputElement | null>(null);

//   const [heroPreview, setHeroPreview] = useState<string | null>(null);
//   const [profilePreview, setProfilePreview] = useState<string | null>(null);

//   // UPLOAD MUTATION
// const uploadMutation = useMutation({
//   mutationFn: async (formData: FormData) => {
//     return axiosInstance.post(
//       `/memorials/${memorial._id}/upload-image`,
//       formData,
//       {
//         headers: { "Content-Type": "multipart/form-data" }, // <-- REQUIRED
//       }
//     );
//   },
//   onSuccess: () => {
//     queryClient.invalidateQueries(["memorial", memorial.website]);
//     setHeroPreview(null);
//     setProfilePreview(null);
//   },
// });

//   const handleUpload = (file: File, type: "hero" | "profile") => {
//     const formData = new FormData();
//     formData.append("media", file); // MUST MATCH upload.single("media")
//     formData.append("type", type);

//     uploadMutation.mutate(formData);
//   };

//   const handlePreview = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     type: "hero" | "profile"
//   ) => {
//     if (!e.target.files?.[0]) return;

//     const file = e.target.files[0];
//     const preview = URL.createObjectURL(file);

//     if (type === "hero") setHeroPreview(preview);
//     else setProfilePreview(preview);

//     handleUpload(file, type);

//     // reset input so user can re-upload same file
//     e.target.value = "";
//   };

//   return (
//     <Box
//       sx={{
//         height: 340,
//         borderRadius: 3,
//         position: "relative",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundImage: `url(${
//           heroPreview ||
//           memorial?.backgroud ||
//           "https://cdn.pixabay.com/photo/2024/09/19/21/07/night-sky-9059825_1280.jpg"
//         })`,
//         display: "flex",
//         alignItems: "flex-end",
//         p: 3,
//         color: "white",
//       }}
//     >
//       {/* HERO IMAGE UPLOAD */}
//       {user && (
//         <>
//           <IconButton
//             sx={{
//               position: "absolute",
//               top: 20,
//               right: 20,
//               bgcolor: "rgba(0,0,0,0.5)",
//               color: "white",
//             }}
//             onClick={() => heroInputRef.current?.click()}
//           >
//             <CameraAltIcon />
//           </IconButton>

//           <input
//             ref={heroInputRef}
//             type="file"
//             accept="image/*"
//             style={{ display: "none" }}
//             onChange={(e) => handlePreview(e, "hero")}
//           />
//         </>
//       )}

//       {/* PROFILE IMAGE */}
//       <Box sx={{ position: "absolute", right: 30, bottom: -50 }}>
//         <Avatar
//           src={
//             profilePreview ||
//             memorial?.profile ||
//             "https://cdn.pixabay.com/photo/2018/11/10/18/30/all-saints-3807221_1280.jpg"
//           }
//           sx={{
//             width: 130,
//             height: 130,
//             border: "4px solid white",
//             bgcolor: "#eee",
//           }}
//         />

//         {user && (
//           <>
//             <IconButton
//               sx={{ mt: -4, ml: 14, bgcolor: "white", boxShadow: 2 }}
//               onClick={() => profileInputRef.current?.click()}
//             >
//               <CameraAltIcon />
//             </IconButton>

//             <input
//               ref={profileInputRef}
//               type="file"
//               accept="image/*"
//               style={{ display: "none" }}
//               onChange={(e) => handlePreview(e, "profile")}
//             />
//           </>
//         )}
//       </Box>

//       {/* NAME */}
//       <Box sx={{ pb: 1 }}>
//         <Typography variant="h3" fontWeight={700}>
//           {memorial?.firstName} {memorial?.middleName || ""}{" "}
//           {memorial?.lastName}
//         </Typography>

//         <Typography sx={{ opacity: 0.9, fontSize: 18 }}>
//           Forever in our hearts
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default MemorialHero;

import { Box, Typography, Avatar, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import axiosInstance from "../api/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useRef, useState } from "react";

interface Props {
  memorial: any;
  refetch: any;
}

export const THEME_OPTIONS = [
  {
    key: "default",
    label: "Warm",
    preview: {
      background: "linear-gradient(135deg, #faf6f1, #f4eee7)",
      heroImage: "../../public/images/1000226555.jpg",
    },
  },
  {
    key: "light",
    label: "Light",
    preview: {
      background: "#ffffff",
      heroImage: "../../public/images/1000226559.jpg",
    },
  },
  {
    key: "pink",
    label: "Pink",
    preview: {
      background: "linear-gradient(135deg, #fde4ec, #f8bbd0)",
      heroImage: "../../public/images/1000226560.jpg",
    },
  },
  {
    key: "blue",
    label: "Blue",
    preview: {
      background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
      heroImage: "../../public/images/1000226561.jpg",
    },
  },
  {
    key: "lightBlue",
    label: "Light Blue",
    preview: {
      background: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
      heroImage: "../../public/images/1000226562.jpg",
    },
  },
  {
    key: "dark",
    label: "Dark",
    preview: {
      background: "linear-gradient(135deg, #2c2c2c, #1c1c1c)",
      heroImage: "../../public/images/1000226559.jpg",
    },
  },
];

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Button,
  useTheme,
} from "@mui/material";

export const ThemeSelectorModal = ({
  open,
  selectedTheme,
  onSelect,
  onClose,
  onSave,
}: any) => {
  const theme = useTheme();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Change theme</DialogTitle>

      <DialogContent>
        <Grid container spacing={3}>
          {THEME_OPTIONS.map((t) => {
            const active = selectedTheme === t.key;

            return (
              <Grid size={{ xs: 6, sm: 4, md: 3 }} key={t.key}>
                <Box
                  onClick={() => onSelect(t.key)}
                  sx={{
                    cursor: "pointer",
                    borderRadius: 2,
                    overflow: "hidden",
                    border: active
                      ? `2px solid ${theme.palette.primary.main}`
                      : `1px solid ${theme.palette.divider}`,
                    boxShadow: active
                      ? `0 0 0 3px ${theme.palette.primary.light}`
                      : "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  {/* Preview */}
                  <Box
                    sx={{
                      height: 140,
                      background: t.preview.background,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={t.preview?.heroImage} />
                  </Box>

                  {/* Label */}
                  <Box sx={{ p: 1.2, textAlign: "center" }}>
                    <Typography
                      sx={{ color: "#fffff" }}
                      fontWeight={active ? 600 : 400}
                    >
                      {t.label}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            mt: 4,
          }}
        >
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="contained" onClick={onSave}>
            Save theme
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const MemorialHero = ({ memorial, refetch }: Props) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [themeOpen, setThemeOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(memorial.theme);
  const heroInputRef = useRef<HTMLInputElement>(null);
  const profileInputRef = useRef<HTMLInputElement>(null);

  const [heroPreview, setHeroPreview] = useState<string | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);

  // Upload mutation
  const uploadMutation = useMutation({
    mutationFn: async (formData: FormData) =>
      axiosInstance.post(`/memorials/${memorial._id}/upload-image`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["memorial", memorial.website]);
      setHeroPreview(null);
      setProfilePreview(null);
    },
  });

  const handleUpload = (file: File, type: "hero" | "profile") => {
    const formData = new FormData();
    formData.append("media", file);
    formData.append("type", type);
    uploadMutation.mutate(formData);
  };

  const handlePreview = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "hero" | "profile",
  ) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];
    const preview = URL.createObjectURL(file);

    type === "hero" ? setHeroPreview(preview) : setProfilePreview(preview);

    handleUpload(file, type);
    e.target.value = "";
  };

  const handleSaveTheme = async () => {
    try {
      await axiosInstance.put(`/memorials/${memorial._id}`, {
        theme: selectedTheme,
      });

      setThemeOpen(false);
      // reloadMemorial();
      refetch();
    } catch {
      alert("Failed to update theme");
    }
  };

  useEffect(() => {
    const theme = THEME_OPTIONS.find((t) => t.key === selectedTheme);

    if (theme?.preview?.heroImage) {
      setHeroPreview(theme.preview.heroImage);
    }
  }, [selectedTheme]);

  const bornYear = new Date(memorial.bornDay).getFullYear();
  const passedYear = new Date(memorial.passedDay).getFullYear();

  console.log("fasdf", memorial.backgroud);
  console.log("heroPreview", heroPreview);

  return (
    <Box
      sx={{
        position: "relative",
        height: 360,
        borderRadius: 2,
        overflow: "hidden",
        backgroundImage: `
          linear-gradient(
            rgba(255,255,255,0.25),
            rgba(255,255,255,0.25)
          ),
          url(${heroPreview})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
      }}
    >
      {user && (
        <Box
          sx={{
            position: "absolute",
            left: 16,
            bottom: 16,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Button
            size="small"
            variant="contained"
            onClick={() => setThemeOpen(true)}
            sx={{
              borderRadius: 999,
              textTransform: "none",
              boxShadow: 2,
            }}
          >
            Change theme
          </Button>
        </Box>
      )}
      {/* HERO IMAGE UPLOAD */}
      {user && (
        <>
          <IconButton
            onClick={() => heroInputRef.current?.click()}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              bgcolor: "rgba(0,0,0,0.45)",
              color: "white",
              "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
            }}
          >
            <CameraAltIcon fontSize="small" />
          </IconButton>

          <input
            ref={heroInputRef}
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => handlePreview(e, "hero")}
          />
        </>
      )}

      {/* CONTENT */}
      <Box>
        {/* PROFILE */}
        <Box sx={{ position: "relative", mb: 3 }}>
          <Avatar
            src={profilePreview || memorial.profile}
            sx={{
              width: 150,
              height: 190,
              borderRadius: 1,
              mx: "auto",
              border: "4px solid white",
              bgcolor: "#e5e7eb",
            }}
          />

          {user && (
            <>
              <IconButton
                onClick={() => profileInputRef.current?.click()}
                sx={{
                  position: "absolute",
                  bottom: 8,
                  right: -10,
                  bgcolor: "white",
                  boxShadow: 1,
                }}
              >
                <CameraAltIcon fontSize="small" />
              </IconButton>

              <input
                ref={profileInputRef}
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => handlePreview(e, "profile")}
              />
            </>
          )}
        </Box>

        {/* NAME */}
        <Typography variant="h2">
          {memorial.firstName} {memorial.middleName || ""} {memorial.lastName}
        </Typography>
        <Typography variant="h3">
          {memorial.bornDay && memorial.passedDay
            ? `${new Date(memorial.bornDay).getFullYear()} – ${new Date(
                memorial.passedDay,
              ).getFullYear()}`
            : ""}
        </Typography>
        <ThemeSelectorModal
          open={themeOpen}
          selectedTheme={selectedTheme}
          onSelect={setSelectedTheme}
          onClose={() => setThemeOpen(false)}
          onSave={handleSaveTheme}
        />
        <Typography
          sx={{
            mt: 2,
            fontSize: "1.1rem",
            color: "text.secondary",
          }}
        >
          Forever in our hearts
        </Typography>
      </Box>
    </Box>
  );
};

export default MemorialHero;
