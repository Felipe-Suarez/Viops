import { ReactNode } from "react";
import "@/css/globals.css";
import { Inter } from "next/font/google";
import ContextProvider from "@/components/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Viops",
  description:
    "Somos una agencia de diseño web con un enfoque minimalista que combina funcionalidad y estética para brindar experiencias de usuario excepcionales",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main">
          <ContextProvider>{children}</ContextProvider>
        </main>
      </body>
    </html>
  );
}
