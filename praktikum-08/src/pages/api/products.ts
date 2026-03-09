import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const products = [
    {
      id: "1",
      name: "Adidas Duramo SL",
      category: "Men's Shoes",
      price: 900000,
      image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-181792476/adidas_adidas_men_shoes_duramo_sl_2_sepatu_lari_pria_-js4395-_full05_blkx0exm.jpeg",
    },
    {
      id: "2",
      name: "Adidas Samba OG",
      category: "Men's Shoes",
      price: 2000000,
      image: "https://www.footlocker.id/media/catalog/product/cache/f57d6f7ebc711fc328170f0ddc174b08/0/1/01-ADIDAS-FFSSBADI5-ADIB75806-White.jpg",
    },
  ];

  res.status(200).json({
    status: true,
    status_code: 200,
    data: products,
  });
}