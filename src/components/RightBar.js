import React from "react";
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
	Avatar,
	IconButton,
	CardActions,
	Checkbox,
} from "@mui/material";
import ContrastIcon from "@mui/icons-material/Contrast";
import MailIcon from "@mui/icons-material/Mail";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Landscape from "../assets/Landscape.jpeg";

export const RightBar = () => {
	return (
		<Box flex={2} p={2}>
			<Box>
				<Card sx={{ margin: 5 }}>
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
								<img alt="logo" src={Landscape} />
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MailIcon />
							</IconButton>
						}
						title="Jean Bosson"
						subheader="Juin, 30/06/2022"
					/>
					<CardMedia
						component="img"
						height="20%"
						image="https://i.pinimg.com/474x/ee/5c/08/ee5c084e95458aca36b594de11aeaf71.jpg"
						alt="Paella dish"
					/>
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							This impressive paella is a perfect party dish and a fun meal to
							cook together with your guests. Add 1 cup of frozen peas along
							with the mussels, if you like.
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<Checkbox
							icon={<FavoriteBorder />}
							checkedIcon={<Favorite sx={{ color: "red=" }} />}
						/>

						<IconButton aria-label="share">
							<ContrastIcon />
						</IconButton>
					</CardActions>
				</Card>
			</Box>
		</Box>
	);
};
