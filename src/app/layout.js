import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Google Clone",
  description: "An open source Google clone built in Next.js and Tailwing CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
