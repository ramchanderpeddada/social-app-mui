import { createTheme, ThemeProvider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import Add from "./Components/Add";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar/Navbar";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
