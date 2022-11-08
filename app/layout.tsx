import { Rubik } from "@next/font/google";
import "../styles/globals.css";

const rubik = Rubik();

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html
      className={`${rubik.className} bg-slate-100 text-slate-800`}
      lang="en">
      <body>
        <main>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
