### Page dan Layout
1. Routing Dasar

![Routing Dasar](public/docs/1.png)
![Routing Dasar Hasil](public/docs/2.png)

2. Routing Folder
![Routing Folder](public/docs/3.png)
![Routing Folder Hasil](public/docs/4.png)

3. Nested Routing
![Routing App](public/docs/app.png)
![Routing App Hasil](public/docs/app1.png)
![Routing User](public/docs/user.png)
![Routing User Hasil](public/docs/user1.png)
![Routing Password](public/docs/password.png)
![Routing Password Hasil](public/docs/password1.png)


4. Dynamic Routing
![Dynamic Routing](public/docs/produkid.png)
![Dynamic Routing](public/docs/produkuser.png)
![Dynamic Routing](public/docs/hasilprodukuser.png)
![Dynamic Routing](public/docs/sepatu.png)

5. Komponen Navbar
![Komponen Navbar](public/docs/componentsepatu.png)
![Komponen Navbar](public/docs/componentuser.png)
![Komponen Navbar](public/docs/modifglobal.png)
![Komponen Navbar](public/docs/settingapp.png)
![Komponen Navbar](public/docs/NextJS.png)
![Komponen Navbar](public/docs/global.png)
![Komponen Navbar](public/docs/index.png)

6. layout Global
![layout Global](public/docs/appshellkode.png)
![layout Global](public/docs/hasilappshell.png)

7. Tugas 1
![layout Global](public/docs/profile.png)
![layout Global](public/docs/profileedit.png)

8. Tugas 2
![layout Global](public/docs/slug.png)
![layout Global](public/docs/react.png)

9. Tugas 3
![layout Global](public/docs/footer.png)

10. . Pertanyaan Refleksi 
1. Apa perbedaan routing berbasis file dan routing manual? 
Routing berbasis file:
- URL otomatis dibuat dari struktur folder
- Tidak perlu konfigurasi manual
- Lebih cepat dan simpel

Routing manual:
- Harus mendefinisikan route satu per satu (seperti di Express/React Router)
- Lebih fleksibel tapi lebih ribet

2. Mengapa dynamic routing penting dalam aplikasi web? 
- Bisa menangani banyak halaman dengan 1 file
- Cocok untuk blog, produk, detail user
- URL bisa dinamis (contoh: /blog/react-hooks)

3. Apa keuntungan menggunakan layout global dibanding memanggil komponen satu per satu? 
- Tidak perlu import Navbar/Footer di setiap halaman
- Kode lebih rapi
- Konsisten di semua halaman
- Mudah maintenance


11. Kesimpulan
- Menghemat konfigurasi routing
- Mendukung nested & dynamic routing
- Mempermudah layout global lewat _app.tsx
- Struktur project jadi lebih clean