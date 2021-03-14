import "tailwindcss/tailwind.css"
import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { AppProps } from "next/app"
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Component {...pageProps} />;
    </QueryClientProvider>
  )
}

export default MyApp
