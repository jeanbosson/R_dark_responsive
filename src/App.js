import { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { DroiteBare } from "./components/DroiteBare";
import { SideBar } from "./components/SideBar";
import Navbar from "./components/Navbar";
import CenterBar from "./components/CenterBar";
import Add from "./components/Add";

// import { NavBar } from "./components/NavBar";

const App = () => {
	const [mode, setMode] = useState("dark");
	const DarkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});
	return (
		<ThemeProvider theme={DarkTheme}>
			<Box bgcolor={"background.default"} color={"text.primary"}>
				<Navbar />
				<Stack direction="row" spacing={3} justifyContent="space-around">
					<SideBar setMode={setMode} mode={mode} /> {/*pour le mode dark*/}
					<CenterBar />
					<DroiteBare />
				</Stack>
				<Add />
			</Box>
		</ThemeProvider>
	);
};

export default App;
