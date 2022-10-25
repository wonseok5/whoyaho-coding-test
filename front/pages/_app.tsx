import "../styles/globalStyles.tsx";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globalStyles";
import { UserContextProvider } from "../contexts";
import { ThemeProvider } from "styled-components";
import colors from "../constants/colors";
function MyApp({ Component, pageProps }: AppProps) {
  const theme = {
    colors: colors,
  };
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <GlobalStyle></GlobalStyle>
        <Component {...pageProps} />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
