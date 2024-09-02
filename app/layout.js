import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "movie clone",
  description: "movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={montserrat.className}>
        <Header />
        <main className="customMaxWidths">{children}</main>
      </body>
    </html>
  );
}
