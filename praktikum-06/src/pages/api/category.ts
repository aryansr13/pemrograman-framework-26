// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveProducts } from "../utils/db/servicefirebase";

type Data = {
    status: boolean;
    status_code: number;
    data: unknown;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const data = await retrieveProducts("category");
    
    // Pastikan data selalu dalam format array
    const dataArray = Array.isArray(data) ? data : Object.values(data);
    
    res.status(200).json({ 
        status: true, 
        status_code: 200, 
        data: dataArray 
    });
}