// src/routes/MemorialRoute.tsx
import { ThemeProvider } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import MemorialPage from "../pages/MemorialPage";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import { tributeThemes } from "../tributeTheme";
import MainLayout from "./MainLayout";

const fetchMemorialTheme = async (website: string) => {
  const res = await axiosInstance.get(`/memorials/${website}`);
  return res.data.memorial?.theme; // "pink" | "blue" | etc
};

const MemorialRoute = () => {
  const { website } = useParams();

  const { data: themeKey, isLoading } = useQuery({
    queryKey: ["memorial-theme", website],
    queryFn: () => fetchMemorialTheme(website!),
    enabled: !!website,
  });

  if (isLoading) return null;

  const theme =
    (themeKey && tributeThemes[themeKey]) || tributeThemes.pink;

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <MemorialPage />
      </MainLayout>
    </ThemeProvider>
  );
};

export default MemorialRoute;
