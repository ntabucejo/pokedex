import { Rubik } from "@next/font/google";
import "../styles/globals.css";

const rubik = Rubik();

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html className={rubik.className} lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
