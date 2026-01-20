// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   TextField,
//   IconButton,
//   Avatar,
//   Button,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Divider,
//   useMediaQuery,
// } from "@mui/material";
// import { Search, Menu, Close } from "@mui/icons-material";
// import ProfileMenu from "./ProfileMenu";
// import { useAuth } from "../hooks/useAuth";
// import { useState } from "react";
// import theme from "../theme";
// import { useNavigate, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [search, setSearch] = useState("");
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();
//   const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

//   const { user } = useAuth();

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(`Searching for: ${search}`);
//   };

//   const handleProfileClick = (event: any) => {
//     setAnchorEl(event.currentTarget as HTMLElement);
//   };

//   const handleCloseMenu = () => setAnchorEl(null);

//   const toggleMobileDrawer = () => {
//     setMobileOpen((prev) => !prev);
//   };

//   // Detect current page
//   const isLoginPage = location.pathname === "/login";

//   // Decide button text + route
//   const buttonText = isLoginPage ? "Signup" : "Login";
//   const buttonRoute = isLoginPage ? "/signup" : "/login";

//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "About", path: "/about" },
//     { label: "Contact", path: "/contact" },
//     { label: "Pricing", path: "/pricing" },
//   ];

//   const handleNavClick = (path: string) => {
//     navigate(path);
//     if (!isDesktop) {
//       setMobileOpen(false);
//     }
//   };

//   // Mobile Drawer content
//   const drawerContent = (
//     <Box
//       sx={{ width: 260 }}
//       role="presentation"
//       onKeyDown={(e) => {
//         if (e.key === "Escape") setMobileOpen(false);
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           px: 2,
//           py: 1.5,
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{ fontWeight: 700, cursor: "pointer" }}
//           onClick={() => handleNavClick("/")}
//         >
//           Trubute<span style={{ color: "#1565c0" }}>.com</span>
//         </Typography>
//         <IconButton onClick={toggleMobileDrawer}>
//           <Close />
//         </IconButton>
//       </Box>

//       <Divider />

//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.path} disablePadding>
//             <ListItemButton
//               onClick={() => handleNavClick(item.path)}
//               selected={location.pathname === item.path}
//             >
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>

//       <Divider sx={{ my: 1 }} />

//       {/* Auth action in drawer for mobile */}
//       <Box sx={{ px: 2, py: 1 }}>
//         {user ? (
//           <Typography variant="body2">
//             Signed in as <strong>{user.name}</strong>
//           </Typography>
//         ) : (
//           <Button
//             variant="contained"
//             fullWidth
//             onClick={() => handleNavClick(buttonRoute)}
//             sx={{ textTransform: "none", mt: 1 }}
//             color="primary"
//           >
//             {buttonText}
//           </Button>
//         )}
//       </Box>
//     </Box>
//   );

//   return (
//     <>
//       <AppBar position="sticky" color="default" elevation={1}>
//         <Toolbar
//           sx={{
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: { xs: "stretch", md: "center" },
//             gap: { xs: 1, md: 0 },
//             py: 1,
//             px: 2,
//           }}
//         >
//           {/* TOP ROW: Logo + (desktop nav + right controls / or mobile actions) */}
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               width: "100%",
//               justifyContent: "space-between",
//             }}
//           >
//             {/* Logo */}
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 cursor: "pointer",
//                 userSelect: "none",
//               }}
//               onClick={() => navigate("/")}
//             >
//               <Typography
//                 variant="h5"
//                 sx={{
//                   fontWeight: 700,
//                   color: theme.palette.primary.main,
//                 }}
//               >
//                 Trubute<span style={{ color: "#1565c0" }}>.com</span>
//               </Typography>
//             </Box>

//             {/* Center nav (desktop only) */}
//             <Box
//               sx={{
//                 display: { xs: "none", md: "flex" },
//                 alignItems: "center",
//                 gap: 3,
//                 flex: 1,
//                 justifyContent: "center",
//                 ml: 4,
//                 mr: 4,
//               }}
//             >
//               {navItems.map((item) => (
//                 <Typography
//                   key={item.path}
//                   variant="body1"
//                   sx={{
//                     cursor: "pointer",
//                     fontWeight:
//                       location.pathname === item.path ? 600 : 400,
//                     color:
//                       location.pathname === item.path
//                         ? theme.palette.primary.main
//                         : "text.primary",
//                     "&:hover": {
//                       color: theme.palette.primary.main,
//                     },
//                   }}
//                   onClick={() => navigate(item.path)}
//                 >
//                   {item.label}
//                 </Typography>
//               ))}
//             </Box>

//             {/* Right section */}
//             {isDesktop ? (
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 1.5,
//                   ml: "auto",
//                 }}
//               >
//                 {/* Search (desktop) */}
//                 <Box
//                   component="form"
//                   onSubmit={handleSearch}
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     backgroundColor: "#ffffff",
//                     borderRadius: 5,
//                     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//                     overflow: "hidden",
//                     minWidth: "320px",
//                   }}
//                 >
//                   <TextField
//                     size="small"
//                     variant="outlined"
//                     placeholder="Search obituaries..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     InputProps={{
//                       disableUnderline: true,
//                       sx: {
//                         "& fieldset": { border: "none" },
//                         px: 2,
//                       },
//                     }}
//                     sx={{
//                       flexGrow: 1,
//                     }}
//                   />
//                   <IconButton
//                     type="submit"
//                     sx={{
//                       backgroundColor: "#1565c0",
//                       color: "#fff",
//                       borderRadius: 0,
//                       px: 2.5,
//                       "&:hover": { backgroundColor: "#0d47a1" },
//                     }}
//                   >
//                     <Search />
//                   </IconButton>
//                 </Box>

//                 {/* Profile / Auth (desktop) */}
//                 {user ? (
//                   <IconButton onClick={handleProfileClick}>
//                     <Avatar sx={{ bgcolor: "#1565c0" }}>
//                       {user.name?.charAt(0).toUpperCase()}
//                     </Avatar>
//                   </IconButton>
//                 ) : (
//                   <Button
//                     variant="contained"
//                     onClick={() => navigate(buttonRoute)}
//                     sx={{
//                       textTransform: "none",
//                       whiteSpace: "nowrap",
//                     }}
//                     color="primary"
//                   >
//                     {buttonText}
//                   </Button>
//                 )}
//               </Box>
//             ) : (
//               // MOBILE: Only Hamburger (no Login button)
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 {user ? (
//                   <IconButton onClick={handleProfileClick}>
//                     <Avatar sx={{ bgcolor: "#1565c0" }}>
//                       {user.name?.charAt(0).toUpperCase()}
//                     </Avatar>
//                   </IconButton>
//                 ) : null}

//                 <IconButton onClick={toggleMobileDrawer}>
//                   <Menu />
//                 </IconButton>
//               </Box>
//             )}
//           </Box>

//           {/* SECOND ROW: Search (mobile only, centered and padded) */}
//           {!isDesktop && (
//             <Box
//               component="form"
//               onSubmit={handleSearch}
//               sx={{
//                 mt: 1.5,
//                 mb: 0.5,
//                 width: "100%",
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   backgroundColor: "#ffffff",
//                   borderRadius: 5,
//                   boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//                   overflow: "hidden",
//                   width: "92%",
//                   maxWidth: 480,
//                 }}
//               >
//                 <TextField
//                   size="small"
//                   variant="outlined"
//                   placeholder="Search obituaries..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   InputProps={{
//                     disableUnderline: true,
//                     sx: {
//                       "& fieldset": { border: "none" },
//                       px: 2,
//                     },
//                   }}
//                   sx={{
//                     flexGrow: 1,
//                   }}
//                 />
//                 <IconButton
//                   type="submit"
//                   sx={{
//                     backgroundColor: "#1565c0",
//                     color: "#fff",
//                     borderRadius: 0,
//                     px: 2.5,
//                     "&:hover": { backgroundColor: "#0d47a1" },
//                   }}
//                 >
//                   <Search />
//                 </IconButton>
//               </Box>
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>

//       {/* Drawer for mobile nav */}
//       <Drawer anchor="right" open={mobileOpen} onClose={toggleMobileDrawer}>
//         {drawerContent}
//       </Drawer>

//       {/* Profile menu (for both, anchored to icon) */}
//       {user && (
//         <ProfileMenu anchorEl={anchorEl} handleClose={handleCloseMenu} />
//       )}
//     </>
//   );
// };

// export default Navbar;

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  IconButton,
  Avatar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Search, Menu, Close } from "@mui/icons-material";
import ProfileMenu from "./ProfileMenu";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import theme from "../theme";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ memorial }: { memorial?: boolean }) => {
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const navigate = useNavigate();
  const location = useLocation();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const { user } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };

  const handleProfileClick = (event: any) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const toggleMobileDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  // Detect current page
  const isLoginPage = location.pathname === "/login";

  // Decide button text + route
  const buttonText = isLoginPage ? "Signup" : "Login";
  const buttonRoute = isLoginPage ? "/signup" : "/login";

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Pricing", path: "/pricing" },
  ];

  const memorialNavItems = [
    { label: "Create new website", path: "/" },
    { label: "Invite others", path: "/invite" },
    { label: "Contact support", path: "/contact" },
  ];
  const finalNavItems = memorial ? [...memorialNavItems] : navItems;

  const handleNavClick = (path: string) => {
    navigate(path);
    if (!isDesktop) {
      setMobileOpen(false);
    }
  };

  // Mobile Drawer content
  const drawerContent = (
    <Box
      sx={{ width: 260 }}
      role="presentation"
      onKeyDown={(e) => {
        if (e.key === "Escape") setMobileOpen(false);
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.5,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, cursor: "pointer" }}
          onClick={() => handleNavClick("/")}
        >
          Trubute<span style={{ color: "#1565c0" }}>.com</span>
        </Typography>
        <IconButton onClick={toggleMobileDrawer}>
          <Close />
        </IconButton>
      </Box>

      <Divider />

      <List>
        {finalNavItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(item.path)}
              selected={location.pathname === item.path}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 1 }} />

      {/* Auth action in drawer for mobile */}
      <Box sx={{ px: 2, py: 1 }}>
        {user ? (
          <Typography variant="body2">
            Signed in as <strong>{user.name}</strong>
          </Typography>
        ) : (
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleNavClick(buttonRoute)}
            sx={{ textTransform: "none", mt: 1 }}
            color="primary"
          >
            {buttonText}
          </Button>
        )}
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={1}
        sx={{
          bgcolor: theme.palette?.navbar?.background,
          borderBottom: `1px solid ${theme.palette?.navbar?.border}`,
        }}
      >
        <Toolbar
          sx={{
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "stretch", md: "center" },
            gap: { xs: 1, md: 0 },
            py: 1,
            px: 2,
          }}
        >
          {/* TOP ROW: Logo + (desktop nav + right controls / or mobile actions) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                userSelect: "none",
              }}
              onClick={() => navigate("/")}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: theme.palette?.navbar?.logo,
                }}
              >
                Trubute
                <Box
                  component="span"
                  sx={{ color: theme.palette.navbar?.logoAccent }}
                >
                  .com
                </Box>
              </Typography>
            </Box>

            {/* Center nav (desktop only) */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 3,
                flex: 1,
                justifyContent: "center",
                ml: 4,
                mr: 4,
              }}
            >
              {finalNavItems.map((item) => (
                <Typography
                  key={item.path}
                  variant="body1"
                  sx={{
                    cursor: "pointer",
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    color:
                      location.pathname === item.path
                        ? theme.palette.navbar?.linkActive
                        : theme.palette.navbar?.link,
                    "&:hover": {
                      color: theme.palette.navbar?.linkActive,
                    },
                  }}
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
            {user ? memorial&&(
              <IconButton onClick={handleProfileClick}>
                <Avatar sx={{ bgcolor: theme.palette.navbar?.avatarBg }}>
                  {user.name?.charAt(0).toUpperCase()}
                </Avatar>
              </IconButton>
            ) : (
              <Button
                variant="contained"
                onClick={() => navigate(buttonRoute)}
                sx={{
                  textTransform: "none",
                  whiteSpace: "nowrap",
                }}
                color="primary"
              >
                {buttonText}
              </Button>
            )}
            {/* Right section */}
            {isDesktop ? (
              !memorial && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    ml: "auto",
                  }}
                >
                  {/* Search (desktop) */}
                  <Box
                    component="form"
                    onSubmit={handleSearch}
                    sx={{
                      backgroundColor: theme.palette.navbar?.searchBg,
                      borderRadius: 5,
                      boxShadow: theme.shadows[1],
                    }}
                  >
                    <TextField
                      size="small"
                      variant="outlined"
                      placeholder="Search obituaries..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      InputProps={{
                        sx: {
                          "& fieldset": { border: "none" },
                          px: 2,
                        },
                      }}
                      sx={{
                        flexGrow: 1,
                      }}
                    />
                    <IconButton
                      type="submit"
                      sx={{
                        bgcolor: theme.palette.navbar?.searchButtonBg,
                        color: "#fff",
                        "&:hover": {
                          bgcolor: theme.palette.navbar?.searchButtonHover,
                        },
                      }}
                    >
                      <Search />
                    </IconButton>
                  </Box>

                  {/* Profile / Auth (desktop) */}
                  {user ? (
                    <IconButton onClick={handleProfileClick}>
                      <Avatar sx={{ bgcolor: theme.palette.navbar?.avatarBg }}>
                        {user.name?.charAt(0).toUpperCase()}
                      </Avatar>
                    </IconButton>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => navigate(buttonRoute)}
                      sx={{
                        textTransform: "none",
                        whiteSpace: "nowrap",
                      }}
                      color="primary"
                    >
                      {buttonText}
                    </Button>
                  )}
                </Box>
              )
            ) : (
              // MOBILE: Only Hamburger (no Login button)
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {user &&!memorial ? (
                  <IconButton onClick={handleProfileClick}>
                    <Avatar sx={{ bgcolor: "#1565c0" }}>
                      {user.name?.charAt(0).toUpperCase()}
                    </Avatar>
                  </IconButton>
                ) : null}

                <IconButton onClick={toggleMobileDrawer}>
                  <Menu />
                </IconButton>
              </Box>
            )}
          </Box>

          {/* SECOND ROW: Search (mobile only, centered and padded) */}
          {!isDesktop && !memorial && (
            <Box
              component="form"
              onSubmit={handleSearch}
              sx={{
                mt: 1.5,
                mb: 0.5,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: 5,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  width: "92%",
                  maxWidth: 480,
                }}
              >
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Search obituaries..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{
                    sx: {
                      "& fieldset": { border: "none" },
                      px: 2,
                    },
                  }}
                  sx={{
                    flexGrow: 1,
                  }}
                />
                <IconButton
                  type="submit"
                  sx={{
                    backgroundColor: "#1565c0",
                    color: "#fff",
                    borderRadius: 0,
                    px: 2.5,
                    "&:hover": { backgroundColor: "#0d47a1" },
                  }}
                >
                  <Search />
                </IconButton>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile nav */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleMobileDrawer}>
        {drawerContent}
      </Drawer>

      {/* Profile menu (for both, anchored to icon) */}
      {user && (
        <ProfileMenu anchorEl={anchorEl} handleClose={handleCloseMenu} />
      )}
    </>
  );
};

export default Navbar;
