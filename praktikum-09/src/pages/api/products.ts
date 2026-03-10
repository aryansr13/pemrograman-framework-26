import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveProducts } from "../../utils/db/servicefirebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const products = await retrieveProducts("products");

  res.status(200).json({
    status: true,
    status_code: 200,
    data: products,
  });
}