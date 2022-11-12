// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).json({ name: "Method Not Allowed" });
    return;
  }

  const {message} = req.body;

  const newMessage = {
    ...message,
  }

  res.status(200).json({ name: "John Doe" });
}
