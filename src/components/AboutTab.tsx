// import { Box, Typography } from "@mui/material";
// import AboutSectionCard from "./AboutSectionCard";
// import MemorialCarousel from "./MemorialCarousel";
// import dayjs from "dayjs";

// const formatDate = (isoDate: string | undefined) => {
//   if (!isoDate) return "—";
//   return dayjs(isoDate).format("DD MMM YYYY");
// };

// const AboutTab = ({ memorial }: any) => {
//   return (
//     <Box sx={{ p: 2 }}>
//       <Typography
//         variant="h4"
//         fontWeight={700}
//         sx={{ color: "#0b2c52", mb: 3, textAlign: "center" }}
//       >
//         Honoring the Life of {memorial?.firstName}{" "}
//         {memorial?.middleName || ""} {memorial?.lastName}
//       </Typography>

//       <MemorialCarousel>
//         {/* PERSONAL DETAILS */}
//         <AboutSectionCard title="Personal Details" bg="#f7f9fc">
//           <Typography>
//             <strong>Full Name:</strong> {memorial?.firstName}{" "}
//             {memorial?.middleName || ""} {memorial?.lastName}
//           </Typography>

//           <Typography>
//             <strong>Relationship:</strong>{" "}
//             {memorial?.relationshipOther || memorial?.relationship}
//           </Typography>

//           <Typography>
//             <strong>Role / Designation:</strong>{" "}
//             {memorial?.designationOther || memorial?.designation}
//           </Typography>

//           {memorial?.specialDesignation && (
//             <Typography>
//               <strong>Special Honor:</strong> {memorial?.specialDesignation}
//             </Typography>
//           )}

//           {memorial?.title && (
//             <Typography>
//               <strong>Title:</strong> {memorial?.title}
//             </Typography>
//           )}

//           {memorial?.description && (
//             <Typography>
//               <strong>Description:</strong> {memorial?.description}
//             </Typography>
//           )}

//           {memorial?.location && (
//             <Typography>
//               <strong>Location:</strong> {memorial?.location}
//             </Typography>
//           )}
//         </AboutSectionCard>

//         {/* BIRTH INFO */}
//         <AboutSectionCard title="Birth Information" bg="#fff2f2">
//           <Typography>
//             <strong>Date of Birth:</strong> {formatDate(memorial?.bornDay)}
//           </Typography>

//           <Typography>
//             <strong>Birthplace:</strong>{" "}
//             {memorial?.bornCity || "—"}, {memorial?.bornState || "—"},{" "}
//             {memorial?.bornCountry || "—"}
//           </Typography>
//         </AboutSectionCard>

//         {/* PASSING INFO */}
//         <AboutSectionCard title="In Loving Memory" bg="#edf3ff">
//           <Typography>
//             <strong>Date of Passing:</strong> {formatDate(memorial?.passedDay)}
//           </Typography>

//           <Typography>
//             <strong>Place:</strong>{" "}
//             {memorial?.passedCity || "—"}, {memorial?.passedState || "—"},{" "}
//             {memorial?.passedCountry || "—"}
//           </Typography>
//         </AboutSectionCard>

//         {/* LEGACY */}
//         <AboutSectionCard title="Legacy" bg="#fff8e8">
//           <Typography sx={{ lineHeight: 1.7 }}>
//             {memorial?.moreDetails ||
//               "Their light continues to shine through those they touched."}
//           </Typography>
//         </AboutSectionCard>

//         {/* WEBSITE + PLAN */}
//         <AboutSectionCard title="Memorial Information" bg="#f4fafb">
//           <Typography>
//             <strong>Memorial Page:</strong> {memorial?.website}
//           </Typography>

//           <Typography>
//             <strong>Plan:</strong> {memorial?.plan}
//           </Typography>

//           <Typography>
//             <strong>Privacy:</strong>{" "}
//             {memorial?.privacy === "public"
//               ? "Public – Anyone can view"
//               : "Private – Only invited viewers"}
//           </Typography>

//           <Typography>
//             <strong>Status:</strong> {memorial?.status}
//           </Typography>
//         </AboutSectionCard>
//       </MemorialCarousel>
//     </Box>
//   );
// };

// export default AboutTab;

// import { useState } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
// } from "@mui/material";
// import AboutSectionCard from "./AboutSectionCard";
// import MemorialCarousel from "./MemorialCarousel";
// import dayjs from "dayjs";
// import axiosInstance from "../api/axiosInstance";
// import { useAuth } from "../hooks/useAuth";

// const formatDate = (isoDate: string | undefined) => {
//   if (!isoDate) return "—";
//   return dayjs(isoDate).format("DD MMM YYYY");
// };

// const AboutTab = ({ memorial, reloadMemorial }: any) => {
//   const [open, setOpen] = useState(false);
//   const [form, setForm] = useState({ ...memorial });
//   const user=useAuth()
//   console.log(user,memorial,'memorial')

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async () => {
//     try {
//       await axiosInstance.put(`/memorial/${memorial._id}`, form);
//       setOpen(false);
//       reloadMemorial(); // refresh data after update
//     } catch (err) {
//       console.error(err);
//       alert("Update failed");
//     }
//   };

//   const isOwner = user.user?.id === memorial?.createdBy;

//   return (
//     <Box sx={{ p: 2 }}>
//       <Typography
//         variant="h4"
//         fontWeight={700}
//         sx={{ color: "#0b2c52", mb: 3, textAlign: "center" }}
//       >
//         Honoring the Life of {memorial?.firstName}{" "}
//         {memorial?.middleName || ""} {memorial?.lastName}
//       </Typography>

//       {/* SHOW EDIT BUTTON ONLY IF USER IS CREATOR */}
//       {isOwner && (
//         <Box sx={{ textAlign: "right", mb: 2 }}>
//           <Button variant="contained" onClick={() => setOpen(true)}>
//             Edit Details
//           </Button>
//         </Box>
//       )}

//       {/* DETAILS CAROUSEL */}
//       <MemorialCarousel>
//         <AboutSectionCard title="Personal Details" bg="#f7f9fc">
//           <Typography>
//             <strong>Full Name:</strong> {memorial?.firstName}{" "}
//             {memorial?.middleName || ""} {memorial?.lastName}
//           </Typography>

//           <Typography>
//             <strong>Relationship:</strong>{" "}
//             {memorial?.relationshipOther || memorial?.relationship}
//           </Typography>

//           <Typography>
//             <strong>Designation:</strong>{" "}
//             {memorial?.designationOther || memorial?.designation}
//           </Typography>

//           {memorial?.title && (
//             <Typography>
//               <strong>Title:</strong> {memorial?.title}
//             </Typography>
//           )}

//           {memorial?.description && (
//             <Typography>
//               <strong>Description:</strong> {memorial?.description}
//             </Typography>
//           )}

//           {memorial?.location && (
//             <Typography>
//               <strong>Location:</strong> {memorial?.location}
//             </Typography>
//           )}
//         </AboutSectionCard>

//         <AboutSectionCard title="Birth Information" bg="#fff2f2">
//           <Typography>
//             <strong>Date of Birth:</strong> {formatDate(memorial?.bornDay)}
//           </Typography>

//           <Typography>
//             <strong>Birthplace:</strong> {memorial?.bornCity}, {memorial?.bornState},{" "}
//             {memorial?.bornCountry}
//           </Typography>
//         </AboutSectionCard>

//         <AboutSectionCard title="In Loving Memory" bg="#edf3ff">
//           <Typography>
//             <strong>Date of Passing:</strong> {formatDate(memorial?.passedDay)}
//           </Typography>

//           <Typography>
//             <strong>Place:</strong> {memorial?.passedCity},{" "}
//             {memorial?.passedState}, {memorial?.passedCountry}
//           </Typography>
//         </AboutSectionCard>

//         <AboutSectionCard title="Legacy" bg="#fff8e8">
//           <Typography sx={{ lineHeight: 1.7 }}>
//             {memorial?.moreDetails ||
//               "Their light continues to shine through those they touched."}
//           </Typography>
//         </AboutSectionCard>

//         <AboutSectionCard title="Memorial Information" bg="#f4fafb">
//           <Typography>
//             <strong>Memorial Page:</strong> {memorial?.website}
//           </Typography>
//           <Typography>
//             <strong>Plan:</strong> {memorial?.plan}
//           </Typography>
//           <Typography>
//             <strong>Privacy:</strong> {memorial?.privacy}
//           </Typography>
//         </AboutSectionCard>
//       </MemorialCarousel>

//       {/* POPUP FORM FOR UPDATING DETAILS */}
//       <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
//         <DialogTitle>Edit Memorial Details</DialogTitle>
//         <DialogContent sx={{ display: "grid", gap: 2, mt: 1 }}>
//           <TextField
//             label="First Name"
//             name="firstName"
//             value={form.firstName}
//             onChange={handleChange}
//             fullWidth
//           />
//           <TextField
//             label="Middle Name"
//             name="middleName"
//             value={form.middleName}
//             onChange={handleChange}
//             fullWidth
//           />
//           <TextField
//             label="Last Name"
//             name="lastName"
//             value={form.lastName}
//             onChange={handleChange}
//             fullWidth
//           />
//           <TextField
//             label="Title"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             fullWidth
//           />
//           <TextField
//             label="Description"
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             multiline
//             rows={3}
//             fullWidth
//           />
//           <TextField
//             label="Location"
//             name="location"
//             value={form.location}
//             onChange={handleChange}
//             fullWidth
//           />
//         </DialogContent>

//         <DialogActions>
//           <Button onClick={() => setOpen(false)}>Cancel</Button>
//           <Button variant="contained" onClick={handleUpdate}>
//             Save Changes
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default AboutTab;

import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  useTheme,
  Grid,
} from "@mui/material";
import AboutSectionCard from "./AboutSectionCard";
import MemorialCarousel from "./MemorialCarousel";
import dayjs from "dayjs";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../hooks/useAuth";
import { Card, CardContent } from "@mui/material";

// const MemorialStorySection = ({ memorial, formatDate }) => {
//   return (
//     <Box
//       sx={{
//         maxWidth: 900,
//         mx: "auto",
//         px: { xs: 2, md: 3 },
//         py: 4,
//         color: "#5a5a5a",
//         lineHeight: 1.9,
//         fontSize: "1.05rem",
//       }}
//     >
//       {/* LIFE REMEMBERED */}
//       <Section
//         title="A Life Remembered"
//       >
//         <Typography>
//           {memorial?.firstName} {memorial?.middleName || ""}{" "}
//           {memorial?.lastName} was more than a name — they were a presence
//           remembered for warmth, devotion, and quiet strength.
//         </Typography>

//         <Typography sx={{ mt: 2 }}>
//           Known as a{" "}
//           <strong>
//             {memorial?.designationOther || memorial?.designation}
//           </strong>
//           , and cherished as a{" "}
//           <strong>
//             {memorial?.relationshipOther || memorial?.relationship}
//           </strong>
//           , their life reflected care in every role they embraced.
//         </Typography>

//         {memorial?.location && (
//           <Typography sx={{ mt: 2 }}>
//             Home was found in <strong>{memorial?.location}</strong>, a place
//             that held both ordinary days and life’s most meaningful moments.
//           </Typography>
//         )}
//       </Section>

//       {/* BIRTH */}
//       <Section title="Where the Journey Began">
//         <Typography>
//           Born on {formatDate(memorial?.bornDay)}, in{" "}
//           {memorial?.bornCity}, {memorial?.bornState},{" "}
//           {memorial?.bornCountry}, a journey began — quietly, gently,
//           beautifully.
//         </Typography>

//         <Typography sx={{ mt: 2 }}>
//           From those early days grew a life that would touch many and leave
//           memories that time could never erase.
//         </Typography>
//       </Section>

//       {/* PASSING */}
//       <Section title="In Loving Memory">
//         <Typography>
//           On {formatDate(memorial?.passedDay)}, in{" "}
//           {memorial?.passedCity}, {memorial?.passedState},{" "}
//           {memorial?.passedCountry}, they stepped beyond this world and into
//           eternal rest.
//         </Typography>

//         <Typography sx={{ mt: 2 }}>
//           Though their physical presence is no longer with us, their spirit
//           remains — carried forward through love, remembrance, and gratitude.
//         </Typography>
//       </Section>

//       {/* LEGACY */}
//       <Section title="A Lasting Legacy">
//         <Typography sx={{ fontStyle: "italic" }}>
//           {memorial?.moreDetails ||
//             "Their light continues to live on — in every heart they touched, every kindness shared, and every memory held close."}
//         </Typography>
//       </Section>

//       {/* MEMORIAL INFO */}
//       <Section title="This Memorial">
//         <Typography>
//           This space was created to honor a life deeply loved — a place for
//           reflection, remembrance, and shared stories.
//         </Typography>

//         <Typography sx={{ mt: 2 }}>
//           Memorial plan: <strong>{memorial?.plan}</strong>
//         </Typography>

//         <Typography sx={{ mt: 1 }}>
//           Privacy setting: <strong>{memorial?.privacy}</strong>
//         </Typography>
//       </Section>
//     </Box>
//   );
// };

// /* --- INTERNAL SUB-SECTION (kept inside same file) --- */
// const Section = ({ title, children }) => (
//   <Box sx={{ mb: 6 }}>
//     <Typography
//       variant="h5"
//       sx={{
//         mb: 2,
//         fontWeight: 500,
//         color: "#c2185b",
//         fontFamily: "'Playfair Display', serif",
//       }}
//     >
//       {title}
//     </Typography>

//     <Box
//       sx={{
//         pl: 2,
//         borderLeft: "3px solid rgba(216,27,96,0.25)",
//       }}
//     >
//       {children}
//     </Box>
//   </Box>
// );

const MemorialStorySection = ({ memorial, formatDate }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        px: { xs: 2, md: 3 },
        py: 4,
        color: theme.palette.text.secondary,
        lineHeight: 1.9,
        fontSize: "1.05rem",
      }}
    >

      
      {/* LIFE REMEMBERED */}
      <StorySection title="A Life Remembered">
        <Typography>
          {memorial?.firstName} {memorial?.middleName || ""}{" "}
          {memorial?.lastName} was more than a name — a presence remembered for
          warmth, devotion, and quiet strength.
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Known as a{" "}
          <strong>{memorial?.designationOther || memorial?.designation}</strong>{" "}
          and cherished as a{" "}
          <strong>
            {memorial?.relationshipOther || memorial?.relationship}
          </strong>
          , their life reflected care in every role they embraced.
        </Typography>

        {memorial?.location && (
          <Typography sx={{ mt: 2 }}>
            Home was found in <strong>{memorial?.location}</strong>, a place
            where ordinary days became lasting memories.
          </Typography>
        )}
      </StorySection>

      {/* BIRTH */}
      <StorySection title="Where the Journey Began">
        <Typography>
          Born on {formatDate(memorial?.bornDay)}, in {memorial?.bornCity},{" "}
          {memorial?.bornState}, {memorial?.bornCountry}, a journey began —
          quietly and gently.
        </Typography>

        <Typography sx={{ mt: 2 }}>
          From those early moments grew a life that would touch many and be
          remembered always.
        </Typography>
      </StorySection>

      {/* PASSING */}
      <StorySection title="In Loving Memory">
        <Typography>
          On {formatDate(memorial?.passedDay)}, in {memorial?.passedCity},{" "}
          {memorial?.passedState}, {memorial?.passedCountry}, they stepped
          beyond this world and into eternal rest.
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Though no longer seen, their spirit remains — carried forward through
          love, remembrance, and gratitude.
        </Typography>
      </StorySection>

      {/* LEGACY */}
      <StorySection title="A Lasting Legacy">
        <Typography sx={{ fontStyle: "italic" }}>
          {memorial?.moreDetails ||
            "Their light continues to live on — in every heart they touched, every kindness shared, and every memory held close."}
        </Typography>
      </StorySection>

      {/* MEMORIAL INFO */}
      <StorySection title="This Memorial">
        <Typography>
          This space was created to honor a life deeply loved — a place for
          reflection, remembrance, and shared stories.
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Memorial plan: <strong>{memorial?.plan}</strong>
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Privacy setting: <strong>{memorial?.privacy}</strong>
        </Typography>
      </StorySection>
    </Box>
  );
};

/* =========================
   INTERNAL STORY SECTION
========================= */
const StorySection = ({ title, children }) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: 500,
          color: theme.palette.primary.main,
          fontFamily: theme.typography.fontFamily,
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          pl: 2.5,
          borderLeft: `3px solid ${theme.palette.secondary.main}`,
          color: theme.palette.text.primary,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

const formatDate = (isoDate?: string) =>
  isoDate ? dayjs(isoDate).format("DD MMM YYYY") : "—";


const AboutTab = ({ memorial, reloadMemorial }: any) => {
  const { user } = useAuth();
  const isOwner = user?.id === memorial?.createdBy;

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    ...memorial,
    theme: memorial.theme || "default",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/memorials/${memorial._id}`, {
        ...form,
        theme: form.theme,
      });
      // await axiosInstance.put(`/memorials/${memorial._id}`, form);mem
      setOpen(false);
      reloadMemorial();
    } catch {
      alert("Failed to update memorial details");
    }
  };

  return (
    <Box sx={{ px: { xs: 1, md: 4 }, pb: 4 }}>
      {/* HEADER */}
      <Typography
        variant="h3"
        textAlign="center"
        fontWeight={600}
        sx={{ mb: 4 }}
      >
        Honoring the Life of {memorial?.firstName} {memorial?.middleName || ""}{" "}
        {memorial?.lastName}
      </Typography>

      {isOwner && (
        <Box sx={{ textAlign: "right", mb: 3 }}>
          <Button variant="outlined" onClick={() => setOpen(true)}>
            Edit Memorial Details
          </Button>
        </Box>
      )}


      {/* </Box> */}
      <MemorialStorySection memorial={memorial} formatDate={formatDate} />

      {/* EDIT DIALOG */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Edit Memorial Details</DialogTitle>

        <DialogContent sx={{ display: "grid", gap: 2, mt: 1 }}>
          <TextField
            label="First Name"
            name="firstName"
            value={form.firstName || ""}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Middle Name"
            name="middleName"
            value={form.middleName || ""}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={form.lastName || ""}
            onChange={handleChange}
            fullWidth
          />
          <Divider />
          <TextField
            label="Title"
            name="title"
            value={form.title || ""}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Description"
            name="description"
            value={form.description || ""}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />
          <TextField
            label="Location"
            name="location"
            value={form.location || ""}
            onChange={handleChange}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Theme</InputLabel>
            <Select
              value={form.theme}
              label="Theme"
              onChange={(e) => setForm({ ...form, theme: e.target.value })}
            >
              <MenuItem value="default">Default (Warm)</MenuItem>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="pink">Pink</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleUpdate}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AboutTab;
