import { Inter } from "next/font/google";
import "./Styles/globals.css";
import Navbar from "./Components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
