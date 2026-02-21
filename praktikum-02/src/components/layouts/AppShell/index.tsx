import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  return (
    <main>
      <Navbar />

      <div style={{ padding: "20px" }}>
        {children}
      </div>

      <footer
        style={{
          background: "#eee",
          padding: "15px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        © 2026 Aryan Saputra
      </footer>
    </main>
  );
};

export default AppShell;