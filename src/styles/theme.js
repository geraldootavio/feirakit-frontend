import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    blue: {
      900: "#056cf3",
      800: "#4b94f2",
      700: "#0088a7",
      600: "#038c8c",
      500: "#6fbfbf",
    },
    purple: {
      700: "#6d6fb5",
      600: "#9d5c9c",
      500: "#b64b72",
    },
    green: {
      700: "#00875F",
      500: "#00B37E",
      300: "#04D361",
    },
    gray: {
      900: "#0d0d0d",
      500: "#585858",
      400:"#A4A4A4",
      300:"#BDBDBD",
      200: "#f2f2f2",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Montserrat_400Regular",
    body: "Montserrat_700Bold",
  },
  fontSizes: {
    xs: 8,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56,
  },
});
