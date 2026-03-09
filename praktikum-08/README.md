1. Setup Halaman SSR 
![awal](public/docs/1.png)
![awal](public/docs/2.png)

2. mplementasi getServerSideProps pada server
![awal](public/docs/3.png)
![awal](public/docs/4.png)

3.  Refactor Type
![awal](public/docs/5.png)
![awal](public/docs/6.png)

4.   Uji Perbedaan SSR vs CSR 
![awal](public/docs/7.png)
![awal](public/docs/8.png)

5.  Tugas Individu 
![awal](public/docs/8.png)

E. Studi Analisis 
Jawab pertanyaan berikut: 
1. Mengapa SSR lebih baik untuk SEO? 
:
Server-Side Rendering (SSR) lebih baik untuk SEO karena HTML sudah berisi konten saat dikirim dari server. Mesin pencari seperti Google dapat langsung membaca dan mengindeks halaman tanpa menunggu JavaScript dijalankan.
2. Kapan sebaiknya menggunakan SSR? 
:
SSR digunakan ketika:

Website membutuhkan SEO

Konten harus langsung terlihat saat halaman dibuka

Data sering berubah seperti berita atau produk
3. Apa kekurangan SSR dibanding CSR? 
:
Kekurangan SSR:

Beban server lebih besar

Waktu respon server bisa lebih lama

Infrastruktur lebih kompleks
4. Mengapa skeleton tidak muncul pada SSR? 
:
Skeleton tidak muncul pada SSR karena data sudah dirender di server sebelum halaman dikirim ke browser, sehingga halaman langsung menampilkan konten tanpa proses loading di client.