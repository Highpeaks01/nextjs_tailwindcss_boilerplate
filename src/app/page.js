"use client"


import Head from "next/head";
import List from "../components/Items/List"


export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Callvize",
    "description": "AI-powered real-time assistant for web calls, helping salespeople, mentors, and engineers with prompt replies.",
    "url": "https://app.callvize.com",
    "image": "https://github.com/Highpeaks01/callvize_app_data_00/raw/main/logo.png",
    "author": {
      "@type": "Organization",
      "name": "Callvize"
    },
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <Head>
          <title>sample title for boilerplate</title>
          <meta name="description" content="sample description for boilerplate" />
          <meta name="keywords" content="keyword 1, keyword2, keyword3" />
          <meta name="author" content="author" />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph (OG) Meta Tags for Social Sharing */}
          <meta property="og:title" content="placeholder" />
          <meta property="og:description" content="placeholder" />
          <meta property="og:image" content="https://github.com/Highpeaks01/callvize_app_data_00/raw/main/logo.png" />
          <meta property="og:url" content="placeholder" />
          <meta property="og:type" content="website" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full justify-center h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <List />
      </div>
    </>
  )
}
