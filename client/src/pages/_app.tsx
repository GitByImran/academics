import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Root from "./root-layout/root";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}
