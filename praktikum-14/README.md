1.  Membuat Register View 
![awal](public/docs/1.png)

2. Membuat API Register 
![awal](public/docs/2.gif)

3.  Install bcrypt  
![awal](public/docs/3.png)
![awal](public/docs/4.png)
![awal](public/docs/5.gif)
![awal](public/docs/6.png)
![awal](public/docs/7.png)

4. Uji 1
![awal](public/docs/8.gif)

5.  Uji 2 
![awal](public/docs/9.gif)

6. Uji 3
![awal](public/docs/10.png)

7.  Tugas Praktikum 
![awal](public/docs/11.gif)

8. Pertanyaan Analisis

1. Mengapa password harus di-hash? 
: Agar password tidak disimpan dalam bentuk asli → lebih aman jika database bocor.

2. Apa perbedaan addDoc dan setDoc? 
:
addDoc → ID otomatis dari Firestore
setDoc → ID ditentukan sendiri
3. Mengapa perlu validasi method POST? 
:Agar API hanya menerima request yang sesuai (lebih aman & terkontrol).

4. Apa risiko jika email tidak dicek unik? 
:Bisa terjadi akun ganda → login error, data bentrok.

5. Apa fungsi role pada user? 
:Untuk membedakan hak akses (misal: admin vs member).