import "../styles/globalStyles.tsx";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globalStyles";
import { UserContextProvider } from "../contexts";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
