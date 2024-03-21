import "./globals.css";

import {Analytics} from "@vercel/analytics/react";

import type {Metadata} from "next";
import {Josefin_Sans} from "next/font/google";

import Navbar from "@/components/Navbar";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const josefin_Sans = Josefin_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Textop.AI-One stop solution for text AI transformation",
  description: "An AI SaaS product to summarize, classify, sentiment analysis & keyword extraction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin_Sans.className} bg-gradient-to-r from-rose-100 to-teal-100`}>
        <Navbar />
        <main className="mt-12 min-h-[calc(100dvh-3rem)]">{children}</main>
        <ToastContainer
          position="bottom-right"
          autoClose={15000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Analytics />
      </body>
    </html>
  );
}
