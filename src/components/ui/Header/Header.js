import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { FormatListBulleted } from "@material-ui/icons";

import logo from "../../../assets/logo.svg";
import { useStyles } from "./Header.styles";

const ElevationScroll = (props) => {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
};

const Header = () => {
	const classes = useStyles();
	const theme = useTheme();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
	const matches = useMediaQuery(theme.breakpoints.down("md"));

	const [openDrawer, setOpenDrawer] = useState(false);
	const [value, setValue] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const routes = [
		{ name: "Home", link: "/" },
		{ name: "Services", link: "/services" },
		{ name: "The Revolution", link: "/revolution" },
		{ name: "About Us", link: "/about" },
		{ name: "Contact Us", link: "/contact" }
	];

	useEffect(() => {
		switch (window.location.pathname) {
			case "/":
				if (value !== 0) {
					setValue(0);
				}
				break;
			case "/services":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(0);
				}
				break;
			case "/customsoftware":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(1);
				}
				break;
			case "/mobileapps":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(2);
				}
				break;
			case "/websites":
				if (value !== 1) {
					setValue(1);
					setSelectedIndex(2);
				}
				break;
			case "/revolution":
				if (value !== 2) {
					setValue(2);
				}
				break;
			case "/about":
				if (value !== 3) {
					setValue(3);
				}
				break;
			case "/contact":
				if (value !== 4) {
					setValue(4);
				}
				break;
			case "/estimate":
				if (value !== 5) {
					setValue(5);
				}
				break;
			default:
				break;
		}
	}, [value]);

	const handleChange = (e, value) => {
		setValue(value);
	};

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
		setOpen(true);
	};

	const handleMenuItemClick = (e, i) => {
		setAnchorEl(null);
		setOpen(false);
		setSelectedIndex(i);
	};

	const handleClose = (e) => {
		setAnchorEl(null);
		setOpen(false);
	};

	const menuOptions = [
		{ name: "Services", link: "/services" },
		{ name: "Custom Software", link: "/customsoftware" },
		{ name: "Mobile App Development", link: "/mobileapps" },
		{ name: "Website Development", link: "/websites" }
	];

	const tabs = (
		<React.Fragment>
			<Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
				<Tab className={classes.tab} component={Link} to="/" label="Home" />
				<Tab
					aria-owns={anchorEl ? "simple-menu" : undefined}
					aria-haspopup={anchorEl ? "true" : undefined}
					onMouseOver={(e) => handleClick(e)}
					className={classes.tab}
					component={Link}
					to="/services"
					label="Services"
				/>
				<Tab
					className={classes.tab}
					component={Link}
					to="/revolution"
					label="The Revolution"
				/>
				<Tab className={classes.tab} component={Link} to="/about" label="About Us" />
				<Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
			</Tabs>
			<Button variant="contained" color="secondary" className={classes.button}>
				Free Estimate
			</Button>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{ onMouseLeave: handleClose }}
				classes={{ paper: classes.Menu }}
				elevation={0}
			>
				{menuOptions.map((option, i) => (
					<MenuItem
						key={option}
						component={Link}
						to={option.link}
						classes={{ root: classes.MenuItem }}
						onClick={(event) => {
							handleMenuItemClick(event, i);
							setValue(1);
							handleClose();
						}}
						selected={i === selectedIndex && value === 1}
					>
						{option.name}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	);

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				classes={{ paper: classes.drawer }}
			>
				<List disablePadding>
					<ListItem
						divider
						button
						component={Link}
						to="/"
						selected={value === 0}
						onClick={() => {
							setOpenDrawer(false);
							setValue(0);
						}}
					>
						<ListItemText
							className={
								value === 0
									? [classes.drawerItemSelected, classes.drawerItem]
									: classes.drawerItem
							}
							disableTypography
						>
							Home
						</ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							setValue(1);
						}}
						divider
						button
						component={Link}
						to="/services"
						selected={value === 1}
					>
						<ListItemText
							className={
								value === 1
									? [classes.drawerItemSelected, classes.drawerItem]
									: classes.drawerItem
							}
							disableTypography
						>
							Services
						</ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							setValue(2);
						}}
						divider
						button
						component={Link}
						to="/revolution"
						selected={value === 2}
					>
						<ListItemText
							className={
								value === 2
									? [classes.drawerItemSelected, classes.drawerItem]
									: classes.drawerItem
							}
							disableTypography
						>
							Revolution
						</ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							setValue(3);
						}}
						divider
						button
						component={Link}
						to="/about"
						selected={value === 3}
					>
						<ListItemText
							className={
								value === 3
									? [classes.drawerItemSelected, classes.drawerItem]
									: classes.drawerItem
							}
							disableTypography
						>
							About Us
						</ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							setValue(4);
						}}
						divider
						button
						component={Link}
						to="/contact"
						selected={value === 4}
					>
						<ListItemText
							className={
								value === 4
									? [classes.drawerItemSelected, classes.drawerItem]
									: classes.drawerItem
							}
							disableTypography
						>
							Contact Us
						</ListItemText>
					</ListItem>
					<ListItem
						onClick={() => {
							setOpenDrawer(false);
							setValue(5);
						}}
						divider
						button
						component={Link}
						to="/estimate"
						className={classes.drawerItemEstimate}
						selected={value === 5}
					>
						<ListItemText
							className={
								value === 5
									? [classes.drawerItemSelected, classes.drawerItem]
									: classes.drawerItem
							}
							disableTypography
						>
							Free Estimate
						</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
				className={classes.drawerIconContainer}
			>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed" color="primary">
					<ToolBar disableGutters>
						<Button
							component={Link}
							to="/"
							disableRipple
							className={classes.logoContainer}
							onClick={() => {
								setValue(0);
							}}
						>
							<img src={logo} className={classes.logo} alt="company logo" />
						</Button>
						{matches ? drawer : tabs}
					</ToolBar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
};

export default Header;
