import { Box } from "@mui/material";
import React from "react";
import SideList from "./SideList";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <SideList />
      </Box>
    </Box>
  );
};

export default Sidebar;
