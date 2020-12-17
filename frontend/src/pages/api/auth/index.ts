import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

interface Data {
  "X-Hasura-User-Id"?: string;
  "X-Hasura-Role": string;
  "X-Hasura-Backend-Token": string;
}

export default function Auth(req: NextApiRequest, res: NextApiResponse<Data>) {
  const backendToken = jwt.sign({ role: "api-user" }, "1234");
  const token = req.body?.headers?.Authorization;

  if (typeof token !== "string") {
    res.status(200).json({
      "X-Hasura-Role": "anonymous",
      "X-Hasura-Backend-Token": backendToken,
    });
    return;
  }

  const items = token.split(" ");

  if (items[0] !== "Bearer") {
    res.status(401).json({ message: "no" } as any);
    return;
  }

  try {
    const thing = jwt.verify(items[1], "1234") as any;

    res.status(200).json({
      "X-Hasura-Role": thing.role,
      "X-Hasura-User-Id": thing.sub,
      "X-Hasura-Backend-Token": backendToken,
    });
  } catch (e) {
    res.status(401).json({ message: "no" } as any);
  }
}
