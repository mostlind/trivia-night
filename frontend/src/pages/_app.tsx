import "../styles/globals.css";
import React from "react";
import { NextWebVitalsMetric } from "next/app";
import { withUrqlClient } from "next-urql";
import { devtoolsExchange } from "@urql/devtools";
import {
  cacheExchange,
  dedupExchange,
  fetchExchange,
  createClient,
  Provider,
} from "urql";

if (
  [process.env.NEXT_PUBLIC_TODO_APP_BACKEND_URL].some(
    (envVar) => envVar === undefined
  )
) {
  throw new Error("Must provide all environment variables");
}

const client = createClient({
  url: process.env.NEXT_PUBLIC_TODO_APP_BACKEND_URL!,
  fetchOptions: () => ({
    headers: {
      Authorization: "Bearer user 2902a982-0e02-446b-b65a-c8ceed50fcc1",
    },
  }),
  exchanges: [devtoolsExchange, dedupExchange, cacheExchange, fetchExchange],
});

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // TODO: batch writes
  client
    .mutation(
      `
    mutation WriteMetrics($metrics: [frontend_metrics_insert_input!]!) {
      insert_frontend_metrics(objects: $metrics) {
        affected_rows
      }
    }
  `,
      { metrics: [metric] }
    )
    .toPromise();
}

export default function App({ Component, pageProps }: any) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

// export default withUrqlClient((ssrExchange, ctx) => {
//   return {
//     url: process.env.NEXT_PUBLIC_TODO_APP_BACKEND_URL!,
//     fetchOptions: () => ({
//       headers: {
//         Authorization: "Bearer user 2902a982-0e02-446b-b65a-c8ceed50fcc1",
//       },
//     }),
//     exchanges: [
//       devtoolsExchange,
//       dedupExchange,
//       cacheExchange,
//       ssrExchange,
//       fetchExchange,
//     ],
//   };
// })(App);
