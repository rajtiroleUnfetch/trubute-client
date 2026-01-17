// src/pages/MemorialPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderSection from "../components/Tabs/HeaderSection";
import MemoryTabs from "../components/Tabs/MemoryTabs";
import axiosInstance from "../api/axiosInstance";

type Memorial = {
  _id: string;
  firstName: string;
  lastName: string;
  website: string;
};

const ViewMemorialPage: React.FC = () => {
  const { idOrWebsite = "" } = useParams<{ idOrWebsite: string }>();
  const [memorial, setMemorial] = useState<Memorial | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Base URL without trailing slash


useEffect(() => {
  if (!idOrWebsite) return;

  const fetchMemorial = async () => {
    setLoading(true);
    setError("");

    try {
      const { data } = await axiosInstance.get(
        `/memorials/${idOrWebsite}`
      );

      console.log(data);
      setMemorial(data.memorial);
    } catch (err) {
      console.error("Failed to load memorial", err);
      setError("Failed to load memorial");
    } finally {
      setLoading(false);
    }
  };

  fetchMemorial();
}, [idOrWebsite]);


  if (loading) return <div className="p-6 text-center">Loading memorial...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;
  if (!memorial) return <div className="p-6 text-center">No memorial found.</div>;

  return (
    <div>
      <HeaderSection firstName={memorial.firstName} lastName={memorial.lastName} />

      <div className="max-w-5xl mx-auto px-4 py-6 grid-cols-3">
        <MemoryTabs firstName={memorial.firstName} lastName={memorial.lastName} />
      </div>
    </div>
  );
};

export default ViewMemorialPage;
