import { Darker_Grotesque } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "A link curation tool. Barge you links!",
};

const dG = Darker_Grotesque({
  weight: ["800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dG.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
