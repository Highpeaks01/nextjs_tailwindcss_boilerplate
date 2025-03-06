import "../styles/globals.css";
import Providers from "../providers/Providers";
import ThemeSwitcher from "../components/Basic/ThemeSwitcher";
import Navbar from "../components/Home/NavBar";
import Footer from "../components/Basic/Footer";

export const metadata = {
  title: "Callvize – AI-Powered Web Call Assistant",
  description: "Callvize provides real-time AI-generated prompts during web calls for sales, mentorship, and engineering conversations.",
  keywords: "AI assistant, web calls, real-time prompts, sales AI, mentoring AI, communication AI",
  authors: [{ name: "Callvize" }],
  robots: "index, follow",
  openGraph: {
    title: "Callvize – AI-Powered Web Call Assistant",
    description: "Enhance your web calls with AI-driven real-time responses.",
    url: "https://app.callvize.com",
    siteName: "Callvize",
    images: [{ url: "https://github.com/Highpeaks01/callvize_app_data_00/raw/main/logo.png", width: 600, height: 150 }],
    type: "website",
  },
  linkedin: {
    card: "summary_large_image",
    title: "Callvize – AI-Powered Web Call Assistant",
    description: "AI-driven support for your web calls with real-time suggestions.",
    images: ["https://github.com/Highpeaks01/callvize_app_data_00/raw/main/logo.png"],
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
