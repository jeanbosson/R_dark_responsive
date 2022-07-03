import { Box } from "@mui/material";
import React from "react";
import { RightBar } from "./RightBar";

const CenterBar = () => {
	return (
		<Box flex={4} p={2}>
			<RightBar />
			<RightBar />
			<RightBar />
			<RightBar />
		</Box>
	);
};

export default CenterBar;
