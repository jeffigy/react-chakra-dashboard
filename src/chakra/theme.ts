import { extendTheme } from "@chakra-ui/react";
import { Button } from "./Button";

const colors = {
  brand: {
    50: "#DAF6FF",
    100: "#ADDEFF",
    200: "#7CC7FF",
    300: "#4AB1FF",
    400: "#1A9AFF",
    500: "#0081E6",
    600: "#0064B4",
    700: "#004782",
    800: "#002B51",
    900: "#000F21",
    bg: "#F5F6FA",
  },
};

const theme = extendTheme({
  // colors,
  // components: {
  //   Button: Button,
  // },
});
export default theme;
