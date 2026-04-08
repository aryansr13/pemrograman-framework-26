import type { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "../../utils/db/servicefirebase"; // PERHATIAN: Pastikan path import ini sudah sesuai dengan struktur foldermu

type Data = {
  status: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // 1. Pastikan hanya menerima request dengan method POST
  if (req.method !== "POST") {
    return res.status(405).json({ status: false, message: "Method Not Allowed" });
  }

  // 2. Ekstrak data dari request body (Asumsi frontend mengirim 'fullName' dengan N besar)
  const { email, fullName, password } = req.body;

  // 3. Validasi sederhana agar tidak ada data yang kosong
  if (!email || !fullName || !password) {
    return res.status(400).json({ status: false, message: "Data tidak boleh kosong" });
  }

  // 4. Proses ke Firebase menggunakan Promise agar Next.js menunggu proses selesai
  return new Promise<void>((resolve) => {
    
    // 🔥 PERBAIKAN DI SINI: Kita memetakan variabel 'fullName' ke key 'fullname' (huruf kecil)
    signUp({ email, fullname: fullName, password }, (result: any) => {
      
      if (result.status === "success") {
        res.status(200).json({ status: true, message: result.message });
        resolve();
      } else {
        // Jika gagal (contoh: Email already exists)
        res.status(400).json({ status: false, message: result.message });
        resolve();
      }
      
    });
  });
}