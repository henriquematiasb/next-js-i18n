import type { AppProps } from "next/app";
import { AppLocaleProvider } from "../src/context/locale";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLocaleProvider>
      <Component {...pageProps} />
    </AppLocaleProvider>
  );
}
export default MyApp;
