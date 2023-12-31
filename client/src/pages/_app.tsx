import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Root from "./root-layout/root";
import Provider from "./context/Provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Root>
          <Component {...pageProps} />
        </Root>
      </Provider>
    </QueryClientProvider>
  );
}
