import "tailwindcss/tailwind.css"
import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "../pkg/graphql/client"
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  console.log({ pageProps })
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ApolloProvider client={apolloClient(pageProps.user?.token)}>
        <Component {...pageProps} />;
      </ApolloProvider>
    </QueryClientProvider>
  )
}

export default MyApp
