import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

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

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "3em"
	},
	logo: {
		height: "8em"
	},
	logoContainer: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent"
		}
	},
	tabContainer: {
		marginLeft: "auto"
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: "25px"
	},
	button: {
		...theme.typography.estimate,
		borderRadius: "50px",
		marginLeft: "50px",
		marginRight: "25px",
		height: "45px"
	}
}));

const Header = () => {
	const routes = ["/", "/services", "/revolution", "/about", "/contact"];
	const classes = useStyles();
	const [value, setValue] = useState(0);

	useEffect(() => {
		const indexRoute =
			(routes.includes(window.location.pathname) &&
				routes.indexOf(window.location.pathname)) ||
			0;
		setValue(indexRoute);
	}, [value]);
	const handleChange = (e, value) => {
		setValue(value);
	};

	return (
		<>
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
						<Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
							<Tab className={classes.tab} component={Link} to="/" label="Home" />
							<Tab
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
							<Tab
								className={classes.tab}
								component={Link}
								to="/about"
								label="About Us"
							/>
							<Tab
								className={classes.tab}
								component={Link}
								to="/contact"
								label="Contact Us"
							/>
						</Tabs>
						<Button variant="contained" color="secondary" className={classes.button}>
							Free Estimate
						</Button>
					</ToolBar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</>
	);
};

export default Header;
