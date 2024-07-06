import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CHEF - Timbu Cloud Store",
  description: "A simple and user-friendly online store, focusing on a fast and streamlined shopping experience. This will be a single-seller platform showcasing products and checkout experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
