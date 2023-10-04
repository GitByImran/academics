import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component className={exo2.className} {...pageProps} />;
}
