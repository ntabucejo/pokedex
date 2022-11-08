import "../styles/globals.css";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
