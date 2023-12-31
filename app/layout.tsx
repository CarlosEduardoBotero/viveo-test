import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import AuthProvider from "./context/auth-provider";
import Header from "./components/header";

const roboto = Roboto({ weight: ["300", "400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Usuários aleatórios",
  description: "code test viveo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-50`}>
        <AuthProvider>
          <Header />
          <div className="pt-[--header-height]">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
