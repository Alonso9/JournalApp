import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const PurpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#5CB85C'
        },
        error: {
            main: red[400]
        }
    }
})