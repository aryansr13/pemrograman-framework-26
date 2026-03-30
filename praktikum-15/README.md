1. Custom Login Page 
![awal](public/docs/1.gif)

2. Handle Login di Frontend  
![awal](public/docs/2.png)

3. Authorize di NextAuth (Database Login) 
![awal](public/docs/3.png)

4. Tambahkan Role ke Token 
![awal](public/docs/4.gif)

5. Callback URL Logic 
![awal](public/docs/5.png)

6.  Membuat halaman Admin dan authoriz 
![awal](public/docs/6.png)

7. Pengujian 
![awal](public/docs/7.gif)

8. Pertanyaan Analisis

1. Mengapa password harus diverifikasi dengan bcrypt.compare? 
:Karena password di database disimpan dalam bentuk hash, bukan plaintext. bcrypt.compare digunakan untuk mencocokkan password input dengan hash secara aman.

2. Mengapa role disimpan di token? 
:Supaya akses user bisa dicek cepat (misalnya admin/user) tanpa query ulang ke database setiap request.

3. Apa fungsi callbackUrl? 
:Untuk menentukan redirect setelah login berhasil (misalnya balik ke halaman sebelumnya atau ke dashboard).

4. Mengapa middleware penting untuk security?
:Karena middleware bisa menyaring akses sebelum masuk ke halaman, jadi user yang belum login langsung ditolak.

5. Apa risiko jika role tidak dicek di middleware? 
:User bisa akses halaman yang tidak seharusnya (contoh: user biasa masuk ke halaman admin).