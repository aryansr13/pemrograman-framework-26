import Navbar from "../navbar";
import Footer from "../footer";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default AppShell;