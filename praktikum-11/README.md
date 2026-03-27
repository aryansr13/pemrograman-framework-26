1. Tambahkan revalidate 
![awal](public/docs/1.png)

2. Pengujian ISR
![awal](public/docs/2.png)
![awal](public/docs/3.png)
![awal](public/docs/4.png)

3. Buat API Revalidate 
![awal](public/docs/5.png)

4. Tambahkan Parameter Data 
![awal](public/docs/6.png)
![awal](public/docs/7.png)

5. Tambahkan Token Security 
![awal](public/docs/8.png)
![awal](public/docs/9.png)

6. Pengujian Manual Revalidation 
![awal](public/docs/10.png)
![awal](public/docs/11.png)
![awal](public/docs/12.png)

7.  Pertanyaan Analisis 
1. Mengapa ISR lebih fleksibel dibanding SSG? 
:
Karena ISR bisa update data setelah build tanpa harus rebuild seluruh project, sedangkan SSG datanya tetap sampai build ulang.
2. Apa perbedaan revalidate waktu dan on-demand? 
:
Revalidate waktu: update otomatis tiap interval (misal 10 detik).
On-demand: update hanya saat dipicu manual lewat API.
3. Mengapa endpoint revalidation harus diamankan? 
:
Agar tidak sembarang orang bisa memicu update data.
4. Apa risiko jika token tidak digunakan? 
:
Orang lain bisa spam revalidate, bikin server berat atau data berubah tanpa kontrol.
5. Kapan ISR lebih cocok dibanding SSR?
:
Saat data tidak harus real-time tapi tetap perlu update berkala (lebih cepat dari SSR).