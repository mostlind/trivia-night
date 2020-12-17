import "../styles/globals.css";
import React from "react";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { Provider } from "urql";
import Head from "next/head";
import { urqlClient } from "../util/urql-client";
import { Router } from "next/dist/client/router";

if (
  [
    process.env.NEXT_PUBLIC_TODO_APP_BACKEND_URL,
    process.env.NEXT_PUBLIC_TODO_APP_BACKEND_WEBSOCKET_URL,
  ].some((envVar) => envVar === undefined)
) {
  throw new Error("Must provide all environment variables");
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   // TODO: batch writes
//   const client = urqlClient({});
//   client
//     .mutation(
//       `
//     mutation WriteMetrics($metrics: [frontend_metrics_insert_input!]!) {
//       insert_frontend_metrics(objects: $metrics) {
//         affected_rows
//       }
//     }
//   `,
//       { metrics: [metric] }
//     )
//     .toPromise();
// }

function getToken(router: Router) {
  if (typeof window === "undefined") {
    return null;
  }

  if (router.pathname.startsWith("/host")) {
    const hostToken = localStorage.getItem("host-token");
    if (hostToken === null) {
      router.push("/login");
      return;
    }
    return hostToken;
  }

  if (router.pathname.startsWith("/game")) {
    const gameStateId = router.query.gameStateId;
    if (gameStateId === undefined) {
      return null;
    }
    const teamToken = localStorage.getItem(
      `team-${router.query.gameStateId}-token`
    );

    if (teamToken === null) {
      router.push("/join/" + gameStateId);
      return;
    }

    return teamToken;
  }

  return null;
}

export default function App({ Component, pageProps, router }: AppProps) {
  const token = getToken(router);
  const clientOptions: { accessToken?: string } = {};
  if (token !== null) {
    clientOptions.accessToken = token;
  }
  const client = urqlClient(clientOptions);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
