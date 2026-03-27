import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#111",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>navbar</h2>

      <div>
        <Link href="/" style={{ marginRight: "20px", color: "white" }}>
          Home
        </Link>
        <Link href="/produk" style={{ color: "white" }}>
          Produk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;