import React from "react";
import {
	Box,
	Typography,
	Avatar,
	AvatarGroup,
	ImageList,
	ImageListItem,
	ListItemText,
	Divider,
	ListItem,
	ListItemAvatar,
	List,
} from "@mui/material";

export const DroiteBare = () => {
	return (
		<Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
			<Box position="fixed" width={300}>
				<Typography variant="h6">La droite</Typography>
				<AvatarGroup max={4}>
					<Avatar
						alt="Remy Sharp"
						src="https://i.pinimg.com/564x/c2/1d/48/c21d48d7161ab35a4132b8bf35305c08.jpg"
					/>
					<Avatar
						alt="Travis Howard"
						src="https://i.pinimg.com/564x/1f/9a/1f/1f9a1f7814ce9916e4bf2591ab3d10ab.jpg"
					/>
					<Avatar
						alt="Cindy Baker"
						src="https://i.pinimg.com/564x/91/17/ff/9117ff6d4df9196eb75944715fab7499.jpg"
					/>
					<Avatar
						alt="Agnes Walker"
						src="https://i.pinimg.com/564x/86/c1/16/86c116dab20f691a2812a80f234eb944.jpg"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://i.pinimg.com/564x/68/d8/17/68d817315fa6f4c0d57ce6e1b7599b6a.jpg"
					/>
				</AvatarGroup>
				<ImageList cols={3} rowHeight={150} variant="woven" gap={4}>
					<ImageListItem>
						<img
							src="https://i.pinimg.com/474x/62/0c/f3/620cf3ac585616f5b14e707529712cb3.jpg"
							alt={""}
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src="https://cdn.pixabay.com/photo/2021/06/07/19/23/kakashi-6318812_640.jpg"
							alt={""}
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src="https://i.pinimg.com/474x/5f/67/74/5f67749e15b0748bcafc2c07896b01f5.jpg"
							alt={""}
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src="https://i.pinimg.com/474x/4e/15/a0/4e15a04143acd6d0cfc0fe747be418bd.jpg"
							alt={""}
						/>
					</ImageListItem>
				</ImageList>
				<Typography variant="h6">Les Images</Typography>
				<List
					sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
				>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar
								alt="Remy Sharp"
								src="https://assets-fr.imgfoot.com/media/cache/642x382/plan-de-travail-1-62bdb93cce5ea.jpg"
							/>
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Summer BBQ"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										to Scott, Alex, Jennifer
									</Typography>
									{" — Wish I could come, but I'm out of town this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar
								alt="Cindy Baker"
								src="https://i.pinimg.com/564x/ae/49/fa/ae49fac52792f0e5e1ade4ab6e9895c0.jpg"
							/>
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Sandra Adams
									</Typography>
									{" — Do you have Paris recommendations? Have you ever…"}
								</React.Fragment>
							}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};
