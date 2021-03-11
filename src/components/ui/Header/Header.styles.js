import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "3em",
		[theme.breakpoints.down("md")]: {
			marginBottom: "2em"
		},
		[theme.breakpoints.down("xs")]: {
			marginBottom: "1.25em"
		}
	},
	logo: {
		height: "8em",
		[theme.breakpoints.down("md")]: {
			height: "7em"
		},
		[theme.breakpoints.down("xs")]: {
			height: "5.5em"
		}
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
	},
	Menu: {
		backgroundColor: theme.palette.common.arcBlue,
		color: "white",
		borderRadius: 0
	},
	menuItem: {
		...theme.typography.tab,
		opacity: 0.7,
		"&:hover": {
			opacity: 1
		}
	},
	drawerIconContainer: {
		marginLeft: "auto",
		"&:hover": {
			backgroundColor: "transparent"
		}
	},
	drawerIcon: {
		height: "50px",
		width: "50px"
	},
	drawer: {
		backgroundColor: theme.palette.common.arcBlue
	},
	drawerItem: {
		...theme.typography.tab,
		color: "white",
		opacity: 0.7
	},
	drawerItemEstimate: {
		backgroundColor: theme.palette.common.arcOrange
	},
	drawerItemSelected: {
		opacity: 1
	}
}));
