
/* =======================
   Types
======================= */

import axiosInstance from "./axiosInstance";

export interface LatestTribute {
  message: string;
}

export interface Memorial {
  id: string;
  name: string;
  profile: string | null;
  background: string | null;
  description?: string;
  latestTribute: LatestTribute | null;
}

/* =======================
   API Call
======================= */

export const getFeaturedMemorials = async (): Promise<Memorial[]> => {
  const { data } = await axiosInstance.get<Memorial[]>(
    "/memorials/featured/list"
  );
  return data;
};
