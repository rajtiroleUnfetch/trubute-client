// import { useNavigate } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Avatar,
//   Skeleton,
//   Chip,
//   Grid
// } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import { getFeaturedMemorials, type Memorial } from "../api/memorials";

// const FeaturedTrubute: React.FC = () => {
//   const navigate = useNavigate();

//   const {
//     data = [],
//     isLoading,
//     isError
//   } = useQuery<Memorial[]>({
//     queryKey: ["featured-memorials"],
//     queryFn: getFeaturedMemorials,
//     staleTime: 1000 * 60 * 5
//   });

//   const handleClick = (id: string) => {
//     navigate(`/memorial/${id}`);
//   };

//   /* =======================
//      Loading
//   ======================= */

//   if (isLoading) {
//     return (
//       <Box
//         maxWidth="lg"
//         mx="auto"
//         px={2}
//         py={6}
//       >
//         <Typography variant="h5" fontWeight={600} mb={3}>
//           Featured Trubutes
//         </Typography>

//         <Grid container spacing={3}>
//           {[...Array(4)].map((_, i) => (
//             <Grid size={{xs:12,sm:6,md:3}} key={i}>
//               <Skeleton variant="rectangular" height={260} />
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     );
//   }

//   /* =======================
//      Error
//   ======================= */

//   if (isError) {
//     return (
//       <Box textAlign="center" py={6}>
//         <Typography color="error">
//           Failed to load featured memorials
//         </Typography>
//       </Box>
//     );
//   }

//   /* =======================
//      Render
//   ======================= */

//   return (
//     <Box
//       maxWidth="lg"
//       mx="auto"
//       px={2}
//       py={6}
//     >
//       <Typography
//         variant="h5"
//         fontWeight={600}
//         mb={3}
//       >
//         Featured Trubutes
//       </Typography>

//       <Grid container spacing={3}>
//         {data.map((memorial) => (
//           <Grid size={{xs:12,sm:6,md:3}} key={memorial.id}>
//             <Card
//               onClick={() => handleClick(memorial.id)}
//               sx={{
//                 cursor: "pointer",
//                 borderRadius: 3,
//                 overflow: "hidden",
//                 boxShadow: 3,
//                 transition: "0.3s",
//                 "&:hover": {
//                   boxShadow: 8,
//                   transform: "translateY(-4px)"
//                 }
//               }}
//             >
//               {/* Background */}
//               {memorial.background ? (
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={memorial.background}
//                   alt={memorial.name}
//                 />
//               ) : (
//                 <Box
//                   height={140}
//                   sx={{
//                     background:
//                       "linear-gradient(135deg, #e0e0e0, #bdbdbd)"
//                   }}
//                 />
//               )}

//               <CardContent
//                 sx={{
//                   position: "relative",
//                   textAlign: "center",
//                   pt: 6
//                 }}
//               >
//                 {/* Profile */}
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: -32,
//                     left: "50%",
//                     transform: "translateX(-50%)"
//                   }}
//                 >
//                   <Avatar
//                     src={memorial.profile ?? undefined}
//                     alt={memorial.name}
//                     sx={{
//                       width: 64,
//                       height: 64,
//                       bgcolor: "grey.600",
//                       fontSize: "1.25rem"
//                     }}
//                   >
//                     {!memorial.profile &&
//                       memorial.name.charAt(0).toUpperCase()}
//                   </Avatar>
//                 </Box>

//                 <Typography
//                   variant="subtitle1"
//                   fontWeight={600}
//                   mt={1}
//                 >
//                   {memorial.name}
//                 </Typography>

//                 {/* Latest Tribute */}
//                 {memorial.latestTribute?.message ? (
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     mt={1}
//                     sx={{
//                       display: "-webkit-box",
//                       WebkitLineClamp: 2,
//                       WebkitBoxOrient: "vertical",
//                       overflow: "hidden"
//                     }}
//                   >
//                     “{memorial.latestTribute.message}”
//                   </Typography>
//                 ) : (
//                   <Typography
//                     variant="body2"
//                     color="text.disabled"
//                     mt={1}
//                     fontStyle="italic"
//                   >
//                     Be the first to leave a tribute
//                   </Typography>
//                 )}

//                 {/* Footer */}
//                 <Box mt={2} display="flex" justifyContent="center">
//                   <Chip
//                     icon={<FavoriteBorderIcon />}
//                     label="View Memorial"
//                     size="small"
//                     clickable
//                   />
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default FeaturedTrubute;

import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Skeleton,
  Chip
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css/bundle";



import { getFeaturedMemorials, type Memorial } from "../api/memorials";

const FeaturedTrubute: React.FC = () => {
  const navigate = useNavigate();

  const { data = [], isLoading, isError } = useQuery<Memorial[]>({
    queryKey: ["featured-memorials"],
    queryFn: getFeaturedMemorials,
    staleTime: 1000 * 60 * 5
  });

  const handleClick = (id: string) => {
    navigate(`/memorial/${id}`);
  };

  /* =======================
     Loading
  ======================= */
  if (isLoading) {
    return (
      <Box maxWidth="lg" mx="auto" px={2} py={6}>
        <Typography variant="h5" fontWeight={600} mb={3}>
          Featured Tributes
        </Typography>

        <Swiper spaceBetween={16} slidesPerView={4}>
          {[...Array(4)].map((_, i) => (
            <SwiperSlide key={i}>
              <Skeleton variant="rectangular" height={260} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  }

  /* =======================
     Error
  ======================= */
  if (isError) {
    return (
      <Box textAlign="center" py={6}>
        <Typography color="error">
          Failed to load featured memorials
        </Typography>
      </Box>
    );
  }

  /* =======================
     Render
  ======================= */
  return (
    <Box maxWidth="lg" mx="auto" px={2} py={6}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Featured Tributes
      </Typography>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        }}
      >
        {data.map((memorial) => (
          <SwiperSlide key={memorial.id}>
            <Card
              onClick={() => handleClick(memorial.id)}
              sx={{
                cursor: "pointer",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 8,
                  transform: "translateY(-4px)"
                }
              }}
            >
              {/* Background */}
              {memorial.background ? (
                <CardMedia
                  component="img"
                  height="140"
                  image={memorial.background}
                  alt={memorial.name}
                />
              ) : (
                <Box
                  height={140}
                  sx={{
                    background:
                      "linear-gradient(135deg, #f3e8ff, #e9d5ff)"
                  }}
                />
              )}

              <CardContent
                sx={{
                  position: "relative",
                  textAlign: "center",
                  pt: 6
                }}
              >
                {/* Profile */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -32,
                    left: "50%",
                    transform: "translateX(-50%)"
                  }}
                >
                  <Avatar
                    src={memorial.profile ?? undefined}
                    alt={memorial.name}
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: "grey.500",
                      fontSize: "1.25rem"
                    }}
                  >
                    {!memorial.profile &&
                      memorial.name.charAt(0).toUpperCase()}
                  </Avatar>
                </Box>

                <Typography variant="subtitle1" fontWeight={600} mt={1}>
                  {memorial.name}
                </Typography>

                {/* Latest Tribute */}
                {memorial.latestTribute?.message ? (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={1}
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    “{memorial.latestTribute.message}”
                  </Typography>
                ) : (
                  <Typography
                    variant="body2"
                    color="text.disabled"
                    mt={1}
                    fontStyle="italic"
                  >
                    Be the first to leave a tribute
                  </Typography>
                )}

                <Box mt={2} display="flex" justifyContent="center">
                  <Chip
                    icon={<FavoriteBorderIcon />}
                    label="View Memorial"
                    size="small"
                    clickable
                  />
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default FeaturedTrubute;
