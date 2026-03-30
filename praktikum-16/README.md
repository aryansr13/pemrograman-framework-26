1. Masuk ke Google Cloud Console 
![awal](public/docs/1.png)

2. Buat Project Baru 
![awal](public/docs/2.png)

3. Konfigurasi OAuth Consent Screen 
![awal](public/docs/3.png)
![awal](public/docs/4.png)
![awal](public/docs/5.png)
![awal](public/docs/6.png)
![awal](public/docs/7.png)

4. Buat OAuth Credentials 
![awal](public/docs/8.png)

5. Tambahkan Environment Variables
![awal](public/docs/9.png)
![awal](public/docs/10.png)

6.  Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session 
![awal](public/docs/11.png)

7. Tambahkan Button Login Google 
![awal](public/docs/12.png)
![awal](public/docs/13.png)
![awal](public/docs/14.png)

8. Simpan Data Google ke Database 
![awal](public/docs/15.png)

9. Pengujian
![awal](public/docs/16.gif)
![awal](public/docs/17.png)

10. diskusi dan analisis
1. Apa perbedaan login credential dan login Google? 
:Credentials: user login pakai email + password yang disimpan di database. 
Google: user login lewat akun Google tanpa perlu membuat password baru.

2. Mengapa data Google tetap perlu disimpan ke database? 
:menyimpan role (admin/member)
menyimpan profil user
mengatur akses fitur
Tanpa database, kita tidak bisa mengatur hak akses.

3. Apa fungsi JWT callback? 
:Untuk menyimpan data penting user (email, role, dll) ke token session sehingga bisa digunakan di seluruh aplikasi tanpa query database berulang.

4. Mengapa perlu multi-role? 
:admin → bisa kelola data
member → hanya melihat data

5. Apa risiko jika tidak menyimpan user ke database? 
: 5️⃣ Risiko jika tidak menyimpan user ke database

tidak bisa mengatur role
tidak bisa menyimpan profil
sulit melacak user
akses fitur tidak bisa dibatasi

11. Tugas Mandiri
![awal](public/docs/18.png)
![awal](public/docs/19.png)
![awal](public/docs/20.gif)