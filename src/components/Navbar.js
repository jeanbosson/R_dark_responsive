import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, styled, Typography, Badge, Avatar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import ContrastIcon from "@mui/icons-material/Contrast";
import MailIcon from "@mui/icons-material/Mail";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { InputBase } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	color: "black",
	width: "40%",
	textAlign: "center",
}));
const Icon = styled("div")(({ theme }) => ({
	display: "flex",
	gap: "10%",
	alignItems: "center",
	[theme.breakpoints.down("sm")]: {
		display: "none",
	},
}));

const UserBox = styled("div")(({ theme }) => ({
	display: "flex",
	gap: "10%",
	alignItems: "center",
	[theme.breakpoints.down("sm")]: {
		display: "flex",
	},
}));
const Navbar = () => {
	const [open, setOpen] = useState(false); //1
	return (
		<Box>
			<AppBar position="static">
				<StyledToolbar>
					<Typography
						variant="h6"
						sx={{ display: { xs: "none", sm: "block" } }}
						//pour la responsivité
					>
						Lenoir
					</Typography>
					<ContrastIcon sx={{ display: { xs: "block", sm: "none" } }} />
					<Search>
						<InputBase placeholder="recherche" />
					</Search>
					<Icon>
						<Badge badgeContent={4} color="error">
							<MailIcon />
						</Badge>
						<Badge badgeContent={4} color="error">
							<AccessibilityNewIcon />
						</Badge>
						<Avatar
							alt="Remy Sharp"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
							sx={{ width: 24, height: 24 }}
							onClick={(e) => setOpen(true)}
						/>
					</Icon>
					<UserBox onClick={(e) => setOpen(true)}>
						{/*iici 2*/}
						<Avatar
							alt="Remy Sharp"
							src="https://newsroom.pinterest.com/sites/pinnews/files/post_main_content_image/2022-06/digital_small-Pinterest_Lake_it_til_you_make_it.jpg"
							sx={{ width: 24, height: 24 }}
						/>
						<Typography variant="span">jean Bosson</Typography>
					</UserBox>
				</StyledToolbar>
				<Menu
					id="demo-positioned-menu"
					aria-labelledby="demo-positioned-button"
					open={open}
					onClose={(e) => setOpen(false)}
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
				>
					<MenuItem>Profile</MenuItem>
					<MenuItem>My account</MenuItem>
					<MenuItem>Logout</MenuItem>
				</Menu>
			</AppBar>
		</Box>
	);
};

export default Navbar;
