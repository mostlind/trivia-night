import { devtoolsExchange } from "@urql/devtools";
import { SubscriptionClient } from "subscriptions-transport-ws";
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  subscriptionExchange,
} from "urql";

if (
  [
    process.env.NEXT_PUBLIC_TODO_APP_BACKEND_URL,
    process.env.NEXT_PUBLIC_TODO_APP_BACKEND_WEBSOCKET_URL,
  ].some((envVar) => envVar === undefined)
) {
  throw new Error("Must provide all environment variables");
}

function configuredSubscriptionExchange(headers: Record<string, string>) {
  const subscriptionClient = new SubscriptionClient(
    process.env.NEXT_PUBLIC_TODO_APP_BACKEND_WEBSOCKET_URL!,
    {
      reconnect: true,
      connectionParams: {
        headers,
      },
    }
  );
  return subscriptionExchange({
    forwardSubscription(operation) {
      return subscriptionClient.request(operation);
    },
  });
}

export function urqlClient({ accessToken }: { accessToken?: string }) {
  const headers: Record<string, string> = {};

  if (accessToken !== undefined) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return createClient({
    url: process.env.NEXT_PUBLIC_TODO_APP_BACKEND_URL!,
    fetchOptions: {
      headers,
    },
    exchanges: [
      devtoolsExchange,
      dedupExchange,
      cacheExchange,
      fetchExchange,
      ...(typeof window === "undefined"
        ? []
        : [configuredSubscriptionExchange(headers)]),
    ],
  });
}
