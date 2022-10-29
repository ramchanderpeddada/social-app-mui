import { Box, Container, Stack } from "@mui/system";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar/Navbar";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
