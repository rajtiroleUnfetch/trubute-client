// import { useParams } from "react-router-dom";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import {
//   Box,
//   Typography,
//   CircularProgress,
//   Divider,
//   Paper,
//   TextField,
//   Button,
// } from "@mui/material";
// import axiosInstance from "../api/axiosInstance";
// import { useState } from "react";
// import { useAuth } from "../hooks/useAuth";
// import MemorialHero from "../components/MemorialHero";
// import MemorialTabs from "../components/MemorialTabs";

// // Load memorial + tributes
// const fetchMemorial = async (website: string) => {
//   const res = await axiosInstance.get(`/memorials/${website}`);
//   return res.data.memorial;
// };

// const MemorialFullPage = () => {
//   const { website } = useParams();
//   const { user } = useAuth();
//   const queryClient = useQueryClient();

//   const [tributeText, setTributeText] = useState("");
//   const [mediaFile, setMediaFile] = useState<File | null>(null);
//   const [type, setType] = useState<"text" | "photo" | "video" | "audio">(
//     "text"
//   );

//   const memorialQuery = useQuery({
//     queryKey: ["memorial", website],
//     queryFn: () => fetchMemorial(website!),
//   });

//   // Add tribute
//   const addTributeMutation = useMutation({
//     mutationFn: async () => {
//       let mediaUrl = null;

//       if (mediaFile) {
//         const form = new FormData();
//         form.append("file", mediaFile);

//         const upload = await axiosInstance.post("/upload", form);
//         mediaUrl = upload.data.url;

//         // detect type
//         const fileType = mediaFile.type.startsWith("video")
//           ? "video"
//           : mediaFile.type.startsWith("audio")
//           ? "audio"
//           : "photo";

//         setType(fileType);
//       }

//       return axiosInstance.post(
//         `/memorials/${memorialQuery.data._id}/tribute`,
//         {
//           type,
//           text: tributeText,
//           mediaUrl,
//         }
//       );
//     },
//     onSuccess: () => {
//       setTributeText("");
//       setMediaFile(null);
//       queryClient.invalidateQueries(["memorial", website]);
//     },
//   });

//   if (memorialQuery.isLoading) return <CircularProgress sx={{ mt: 10 }} />;

//   const memorial = memorialQuery.data;

//   return (
//     <Box  sx={{ p: 4, maxWidth: 1000, mx: "auto" }}>
//       <Paper sx={{ p: 4, borderRadius: 3 }}>
//         <MemorialHero memorial={memorial} />
//         <MemorialTabs memorial={memorial} tributes={memorial?.tributes || []} />

//         <Typography textAlign="center" sx={{ color: "neutral", mt: 1 }}>
//           Created on {new Date(memorial?.createdAt).toLocaleDateString()}
//         </Typography>

//       </Paper>
//     </Box>
//   );
// };

// export default MemorialFullPage;

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Typography,
  CircularProgress,
  Paper,
  Divider,
  ThemeProvider,
  Grid,
} from "@mui/material";
import axiosInstance from "../api/axiosInstance";
import MemorialHero from "../components/MemorialHero";
import MemorialTabs from "../components/MemorialTabs";
import { tributeThemes } from "../tributeTheme";
import MemorialSidebar from "../components/MemorialSidebar";

const MemorialFullPage = ({
  data,
  isLoading,
  isError,
  refetch
}: {
  data: any;
  isLoading: boolean;
  isError: boolean;
  refetch: any;
}) => {
  if (isLoading) {
    return (
      <Box sx={{ mt: 12, display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !data) {
    return (
      <Box sx={{ mt: 12, textAlign: "center", color: "error.main" }}>
        Failed to load memorial
      </Box>
    );
  }

  console.log(data,'data');
  

  const memorial = data;

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 5 },
        border: "1px solid",
        borderColor: "divider",
        maxWidth: "100vw",
      }}
    >
      {/* HERO */}
      <MemorialHero memorial={memorial} refetch={refetch} />

      {/* TABS */}
      <Divider sx={{ my: 4 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column", // mobile
            sm: "column", // tablet
            md: "row", // desktop+
          },
          width: "100%",
          gap: 2,
          justifyContent: {
            xs: "flex-start",
            md: "space-between",
          },
        }}
      >
        <Box>
          <MemorialTabs
            memorial={memorial}
            tributes={memorial.tributes || []}
          />
        </Box>

        <Box mt={8}>
          <MemorialSidebar
            name={memorial.firstName}
            memorial={memorial}
            profileImage={memorial.profile}
            memorialUrl={memorial?.website}
            // photosCount={memorial.photos?.length??0}
            isSubscribed={false}
            views={memorial?.views}
            administeredBy={memorial.createdBy}
          />
        </Box>
      </Box>

      {/* FOOTER */}
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mt: 6,
          color: "text.secondary",
        }}
      >
        Created on {new Date(memorial.createdAt).toLocaleDateString()}
      </Typography>
    </Paper>
  );
};
// <Box>
//       <MemorialSidebar
//         name={memorial.name}
//         profileImage={memorial.profile}
//         memorialUrl={memorial?.website}
//         // photosCount={memorial.photos?.length??0}
//         isSubscribed={false}
//         views={memorial?.views ?? 0}
//         administeredBy={memorial.createdBy}
//       />
//     </Box>

export default MemorialFullPage;
