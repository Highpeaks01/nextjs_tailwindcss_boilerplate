import "../styles/globals.css";
import Providers from "../providers/Providers";
import ThemeSwitcher from "../components/Basic/ThemeSwitcher";
import Navbar from "../components/Home/NavBar";
import Footer from "../components/Basic/Footer";

export const metadata = {
  title: "Your Website Title",
  icons: {
    icon: "/favicon.gif",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="bg-theme text-theme min-h-screen font-sans antialiased">
        <Providers>
          <div className="relative">
            {/* ✅ Add LanguageSwitcher in the top-right */}
            <div className="absolute z-10 top-2 right-2">
              <ThemeSwitcher />
            </div>
          </div>

          {/* ✅ Use a flex container for sidebar + main content */}
          <main className="flex flex-col justify-center min-h-screen">
            <div className="flex fixed top-0 left-0 z-10 mt-8 items-center justify-center w-full">
              <Navbar />
            </div>
            <div className="flex-1 pt-32 overflow-auto">
              {children}
            </div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
