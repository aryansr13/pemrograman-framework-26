export default function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Ini halaman about</h1>
      {/* <h1>About Me</h1> */}
      <h1 data-testid="title">About Page</h1>
      <p>
        <strong>Nama Mahasiswa:</strong> Aryan Saputra Rahmad
      </p>
      <p>
        <strong>NIM:</strong> 2341720022
      </p>
      <p>
        <strong>Program Studi:</strong> Teknik Informatika
      </p>
    </div>
  );
}