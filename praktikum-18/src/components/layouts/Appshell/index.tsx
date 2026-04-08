import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const roboto = Roboto({
  weight: ["400","500", "700"],
  subsets: ["latin"],
});

type AppshellProps = {
  children: React.ReactNode;
};

const Appshell = (props: AppshellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main className={roboto.className}>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      <Footer />
    </main>
  );
};

export default Appshell;