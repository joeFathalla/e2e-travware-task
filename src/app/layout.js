import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/store/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="w-full h-full">
            <div className="md:w-2/4 sm:w-3/4 p-4 m-5 md:mx-auto rounded-lg bg-slate-800 drop-shadow-xl">
              <h1 className="text-slate-200 text-center text-2xl font-extrabold font-[verdana]">
                E2E Travware Blog App
              </h1>
            </div>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
