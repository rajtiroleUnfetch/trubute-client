// src/routes/MemorialRoute.tsx

import { useParams } from "react-router-dom";
import MemorialPage from "../pages/MemorialPage";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import { tributeThemes, type TributeThemeKey } from "../tributeTheme";
import MainLayout from "./MainLayout";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Footer from "../components/Footer";

const fetchMemorialTheme = async (
  website: string
): Promise<TributeThemeKey | null> => {
  const res = await axiosInstance.get(`/memorials/${website}`);
  return res.data.memorial?.theme ?? null;
};

// Fetch memorial
const fetchMemorial = async (website: string) => {
  const res = await axiosInstance.get(`/memorials/${website}`);
  return res.data.memorial;
};

const MemorialRoute = () => {
  const { website } = useParams();

  const { data, isLoading, isError ,refetch} = useQuery({
    queryKey: ["memorial", website],
    queryFn: () => fetchMemorial(website!),
    enabled: !!website,
  });

  if (isLoading) return null;

  const memorial = data.theme;
  const theme =
    memorial && memorial in tributeThemes
      ? tributeThemes[memorial]
      : tributeThemes.pink;

  console.log("fasdfa", theme);

  return (
    <ThemeProvider theme={theme}>
      <Navbar memorial={true} />
      <Box sx={{ minHeight: "80vh" }}>
        <MemorialPage data={data} isLoading={isLoading} isError={isError} refetch={refetch}/>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default MemorialRoute;
