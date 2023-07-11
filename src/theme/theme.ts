import { createTheme } from "@mui/material/styles";
import { DM_Sans } from "next/font/google";

const inter = DM_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const theme = createTheme({
	palette: {
		background: {
			default: "#1c2539",
		},
		primary: {
			main: "#ed1c24",
		},
	},
	typography: {
		fontFamily: inter.style.fontFamily,
		fontSize: 14,
	},
	spacing: 2,
});

export { theme };
