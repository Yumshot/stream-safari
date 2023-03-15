// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/vt323/400.css";
// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    heading: `'vt323', monospace`,
    h2: `'vt323', monospace`,
    body: `'vt323', monospace`,
  },
});

export default theme;
