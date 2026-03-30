import type { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "@/utils/db/servicefirebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, fullName, password } = req.body;

  return new Promise<void>((resolve) => {
    signUp({ email, fullName, password }, (result: any) => {
      if (result.status === "success") {
        res.status(200).json({ message: result.message });
      } else if (result.message === "User already exists") {
        res.status(400).json({ message: result.message });
      } else {
        res.status(500).json({ message: result.message });
      }

      resolve(); // ✅ SELALU resolve, JANGAN reject
    });
  });
}