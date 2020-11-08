import "../styles/globals.css";
import React from "react";
import { NextWebVitalsMetric } from "next/app";
import { devtoolsExchange } from "@urql/devtools";
import { SubscriptionClient } from "subscriptions-transport-ws";
import {
  cacheExchange,
  dedupExchange,
  fetchExchange,
  createClient,
  Provider,
  subscriptionExchange,
  Exchange,
} from "urql";

if (
  [
    process.env.NEXT_PUBLIC_TODO_APP_BACKEND_URL,
    process.env.NEXT_PUBLIC_TODO_APP_BACKEND_WEBSOCKET_URL,
  ].some((envVar) => envVar === undefined)
) {
  throw new Error("Must provide all environment variables");
}

console.log(
  "vars",
  process.env.NEXT_PUBLIC_TODO_APP_BACKEND_URL,
  process.env.NEXT_PUBLIC_TODO_APP_BACKEND_WEBSOCKET_URL
);

const clientOnlyExchanges: Exchange[] = [];

if (typeof window !== "undefined") {
  const subscriptionClient = new SubscriptionClient(
    process.env.NEXT_PUBLIC_TODO_APP_BACKEND_WEBSOCKET_URL!,
    {
      reconnect: true,
      connectionParams: {
        headers: {
          Authorization: "Bearer host 324b7800-12f5-483c-a76e-8346ce107fb1",
        },
      },
    }
  );

  clientOnlyExchanges.push(
    subscriptionExchange({
      forwardSubscription(operation) {
        return subscriptionClient.request(operation);
      },
    })
  );
}

const client = createClient({
  url: process.env.NEXT_PUBLIC_TODO_APP_BACKEND_URL!,
  fetchOptions() {
    return {
      headers: {
        Authorization: "Bearer host 324b7800-12f5-483c-a76e-8346ce107fb1",
      },
    };
  },
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange,
    fetchExchange,
    ...clientOnlyExchanges,
  ],
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
