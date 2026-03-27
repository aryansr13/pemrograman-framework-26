import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const token = req.query.token as string;

  // validasi token
  if (token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({
      revalidated: false,
      message: "Insert correct token",
    });
  }

  // samakan dengan URL (products)
  if (req.query.data === "products") {
    try {
      await res.revalidate("/produk/static");
      return res.status(200).json({ revalidated: true });
    } catch (error) {
      return res.status(500).json({ revalidated: false });
    }
  }

  return res.status(400).json({
    revalidated: false,
    message: "Invalid query parameter",
  });
}