import localFont from "next/font/local";
import "./globals.css";

// Les polices locales sont chargées ici
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Les métadonnées de la page sont définies ici
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Le layout de base est défini ici
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} // Les polices locales sont appliquées ici 
      >
        {children} {/* Les enfants sont rendus ici */}
      </body>
    </html>
  );
}
