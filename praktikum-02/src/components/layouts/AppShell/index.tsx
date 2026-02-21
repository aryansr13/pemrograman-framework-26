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

      <footer style={{ background: "#eee", padding: "10px", textAlign: "center" }}>
        footer
      </footer>
    </main>
  );
};

export default AppShell;