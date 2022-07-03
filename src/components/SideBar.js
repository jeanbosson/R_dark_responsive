import React from "react";
import { Box, Switch } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ArticleIcon from "@mui/icons-material/Article";
import ModeNightIcon from "@mui/icons-material/ModeNight";

export const SideBar = ({ mode, setMode }) => {
	return (
		<Box p={2} flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
			<Box position="fixed">
				<List>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#home">
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Homepage" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#simple-list">
							<ListItemIcon>
								<ArticleIcon />
							</ListItemIcon>
							<ListItemText primary="pages" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#home">
							<ListItemIcon>
								<GroupIcon />
							</ListItemIcon>
							<ListItemText primary="Groupe" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#simple-list">
							<ListItemIcon>
								<StorefrontIcon />
							</ListItemIcon>
							<ListItemText primary="Marketplace" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#simple-list">
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText primary="Friends" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#simple-list">
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary="settings" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#simple-list">
							<ListItemIcon>
								<ModeNightIcon />
							</ListItemIcon>
							<Switch
								onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
							/>
							{/*la suite du darkMode */}
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};
