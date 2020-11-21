import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  "X-Hasura-User-Id": string;
  "X-Hasura-Role": string;
}

export default function Auth(req: NextApiRequest, res: NextApiResponse<Data>) {
  const token = req.body?.headers?.Authorization;

  if (typeof token !== "string") {
    res.status(401).json({ response: "no" } as any);
    return;
  }

  const items = token.split(" ");

  if (items[0] !== "Bearer") {
    res.status(401).json({ response: "no" } as any);
    return;
  }

  if (items.length !== 3) {
    res.status(401).json({ response: "no" } as any);
    return;
  }

  res
    .status(200)
    .json({ "X-Hasura-Role": items[1], "X-Hasura-User-Id": items[2] });
}
