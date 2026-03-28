1. Install NextAuth 
![awal](public/docs/1.png)

2. Konfigurasi API Auth  
![awal](public/docs/2.png)

3. Tambahkan Secret  
![awal](public/docs/3.png)

4. Tambahkan SessionProvider   
![awal](public/docs/4.png)

5. Tambahkan Tombol Login & Logout  
![awal](public/docs/5.png)
![awal](public/docs/6.png)
![awal](public/docs/7.png)

6. Menambahkan Data Tambahan (Full Name) 
![awal](public/docs/8.png)
![awal](public/docs/9.png)

7. Proteksi Halaman Profile 
![awal](public/docs/10.png)

8. Pengujian 
![awal](public/docs/11.gif)

9. Pertanyaan Analisis 
1. Mengapa session menggunakan JWT? 
:Karena stateless, tidak perlu simpan data di server dan lebih ringan.

2. Apa perbedaan authorize() dan callback jwt()? 
:authorize() → untuk validasi login (email & password)
jwt() → untuk menyimpan data user ke token

3. Mengapa middleware perlu getToken()? 
:Untuk mengecek apakah user sudah login (punya token) atau belum.

4. Apa risiko jika NEXTAUTH_SECRET tidak digunakan? 
:Token bisa tidak aman / mudah dimanipulasi.

5. Apa perbedaan autentikasi dan otorisasi dalam sistem ini? 
:Autentikasi → proses login (verifikasi user)
Otorisasi → hak akses ke halaman (misal /profile)