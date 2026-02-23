1. Setup
![Setup](public/docs/setup.png)

2. Membuat Catch-All Route 
![lLangkah 2](public/docs/1.png)
![Langkah 2](public/docs/2.png)

3. Membuat Catch-All Route 
![lLangkah 3](public/docs/3.png)
![Langkah 3](public/docs/4.png)
![lLangkah 3](public/docs/5.png)


4. Optional Catch-All Route
![lLangkah 4](public/docs/erorr.png)
![Langkah 4](public/docs/renameslug.png)

5. Validasi Parameter
![lLangkah 5](public/docs/semuakategori.png)

7. Navigasi Imperatif (router.push) 
![lLangkah 7](public/docs/authlogin.png)
![lLangkah 7](public/docs/keproduk.png)

8. NavigasiSimulasi Redirect (Belum Login) 
![lLangkah 8](public/docs/produkmasuklogindulu.png)

9. Tugas 1
![lLangkah 8](public/docs/tugas1.png)

10. Tugas 2
![Tugas 2](public/docs/tugas2.1.png)
![Tugas 2](public/docs/tugas2.2.png)
![Tugas 2](public/docs/tugas2.3.png)

11. Tugas 3
![Tugas 3](public/docs/tugas3.png)
![Tugas 3](public/docs/tugas3.1.png)


12. Tugas 4

1. Apa perbedaan [id].js dan [...slug].js? 
: File [id].js digunakan untuk menangkap satu parameter dari URL, misalnya /produk/10. Sedangkan [...slug].js digunakan untuk menangkap banyak parameter sekaligus dari URL, misalnya /produk/sepatu/nike. Jadi [id] hanya satu nilai, sedangkan [...slug] bisa banyak bagian.

2. Mengapa slug berbentuk array? 
:Karena [...slug].js bisa menangkap lebih dari satu bagian URL, maka setiap bagian disimpan sebagai array. Contohnya URL /produk/sepatu/nike akan menjadi ["sepatu", "nike"].

3. Kapan sebaiknya menggunakan Link dan router.push()? 
:Gunakan Link untuk navigasi biasa lewat klik user, seperti dari login ke register. Gunakan router.push() untuk navigasi berdasarkan proses program, misalnya setelah login berhasil langsung diarahkan ke halaman produk.

4. Mengapa navigasi Next.js tidak me-refresh halaman?
:Karena Next.js menggunakan client-side routing, yaitu hanya mengganti komponen halaman tanpa reload seluruh website. Hal ini membuat perpindahan halaman lebih cepat dan terasa seperti aplikasi mobile.