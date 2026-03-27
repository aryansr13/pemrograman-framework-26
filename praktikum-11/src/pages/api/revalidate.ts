// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    try {
        // Memaksa Next.js untuk membuat ulang halaman statis pada path yang ditentukan
        await res.revalidate("/produk/static");
        
        return res.status(200).json({ revalidated: true });
    } catch (error) {
        // Menampilkan log error di konsol server jika terjadi kegagalan
        console.error("Error in API route:", error);
        
        // Mengembalikan status 500 jika proses revalidasi gagal
        res.status(500).send({ revalidated: false });
    }
}