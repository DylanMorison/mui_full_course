import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./Footer.styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../../assets/Footer Adornment.svg";
import FB from "../../../assets/facebook.svg";
import Twitter from "../../../assets/twitter.svg";
import IG from "../../../assets/instagram.svg";

const Footer = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Hidden mdDown>
				<Grid
					container
					className={classes.mainContainer}
					justify="center"
					alignItems
					spacing={10}
				>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid item component={Link} to="/" className={classes.link}>
								Home
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem} spacing={2}>
						<Grid container direction="column" spacing={2}>
							<Grid item component={Link} to="/services" className={classes.link}>
								Services
							</Grid>
							<Grid item component={Link} to="/customsoftware" className={classes.link}>
								Custom Software Development
							</Grid>
							<Grid item component={Link} to="/mobileapps" className={classes.link}>
								Mobile App Development
							</Grid>
							<Grid item component={Link} to="/websites" className={classes.link}>
								Website Development
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid item component={Link} to="/revolution" className={classes.link}>
								The Revolution
							</Grid>
							<Grid item component={Link} to="/revolution" className={classes.link}>
								Vision
							</Grid>
							<Grid item component={Link} to="/revolution" className={classes.link}>
								Technology
							</Grid>
							<Grid item component={Link} to="/revolution" className={classes.link}>
								Process
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid item component={Link} to="/about" className={classes.link}>
								About Us
							</Grid>
							<Grid item component={Link} to="/about" className={classes.link}>
								History
							</Grid>
							<Grid item component={Link} to="/about" className={classes.link}>
								Team
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction="column" spacing={2}>
							<Grid item component={Link} to="/contact" className={classes.link}>
								Contact Us
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Hidden>

			<img
				src={footerAdornment}
				alt="black decorative slash"
				className={classes.adornment}
			/>
			<Grid container justify="flex-end" className={classes.socialContainer}>
				<Grid
					item
					component={"a"}
					href="https://www.facebook.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img alt="facebook logo" src={FB} className={classes.icon} />
				</Grid>
				<Grid
					item
					component={"a"}
					href="https://www.Twitter.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img alt="Twitter logo" src={Twitter} className={classes.icon} />
				</Grid>
				<Grid
					item
					component={"a"}
					href="https://www.Instagram.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					<img alt="IG logo" src={IG} className={classes.icon} />
				</Grid>
			</Grid>
		</footer>
	);
};

export default Footer;
