import type { NextApiRequest, NextApiResponse } from "next";
import {
  retrieveDataByID,
  retrieveProducts,
} from "../../../utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { product } = req.query;

  if (product && product[0]) {
    const data = await retrieveDataByID("products", product[0] as string);

    res.status(200).json({
      status: true,
      status_code: 200,
      data,
    });
    return;
  }

  const data = await retrieveProducts("products");

  res.status(200).json({
    status: true,
    status_code: 200,
    data,
  });
}