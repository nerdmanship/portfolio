import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Johan.wtf",
  description: "A visual brain dump",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
