import "../../styles/globals.css";
import Footer from "../components/Navigation/Footer";
import AppNavbar from "../components/Navigation/Navbar";
import Providers from "../components/Utils/Providers";

export const metadata = {
  title: "Your Website Title",
  icons: {
    icon: "/favicon.gif",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="min-h-screen font-sans antialiased">
        <Providers>
          <AppNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
