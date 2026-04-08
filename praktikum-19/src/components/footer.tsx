const Footer = () => {
  return (
    <footer
      style={{
        background: "#0f172a", // Senada dengan warna background awal Navbar
        color: "#94a3b8",
        textAlign: "center",
        padding: "32px 20px",
        marginTop: "60px",
        borderTop: "1px solid #1e293b",
        fontSize: "14px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ margin: "0 0 8px 0", fontWeight: "600", color: "#f8fafc" }}>
          MyApp &copy; {new Date().getFullYear()}
        </p>
        <p style={{ margin: 0 }}>
          Dibuat dengan Next.js dan Firebase.
        </p>
      </div>
    </footer>
  );
};

export default Footer;