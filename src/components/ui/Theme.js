import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0b72b9";
const arcOrange = "#ffba60";

export default createMuiTheme({
	palette: {
		common: {
			arcBlue,
			arcOrange
		},
		primary: {
			main: arcBlue
		},
		secondary: {
			main: arcOrange
		}
	},
	typography: {
		tab: {
			fontFamily: "Raleway",
			textTransform: "none",
			fontWeight: 700,
			fontSize: "1rem"
		},
		estimate: {
			fontFamily: "Pacifico",
			fontSize: "1rem",
			textTransform: "none",
			color: "white"
		}
	}
});
