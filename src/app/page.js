"use client"


import Head from "next/head";
import CallsList from "../components/Calls/CallsList"


export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Callvize",
    "description": "AI-powered real-time assistant for web calls, helping salespeople, mentors, and engineers with prompt replies.",
    "url": "https://yourdomain.com",
    "image": "https://yourdomain.com/og-image.jpg",
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
          <title>Callvize – AI-Powered Web Call Assistant</title>
          <meta name="description" content="Callvize is an AI mentalist that provides real-time prompt replies during web calls. When you need a mentor, salesman or engineer ready to help you." />
          <meta name="keywords" content="AI assistant, web calls, real-time prompts, sales AI, mentoring AI, call support, communication AI." />
          <meta name="author" content="Callvize" />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph (OG) Meta Tags for Social Sharing */}
          <meta property="og:title" content="Callvize – AI-Powered Web Call Assistant" />
          <meta property="og:description" content="Enhance your web calls with AI-driven real-time responses. Perfect for sales, mentoring, and technical discussions." />
          <meta property="og:image" content="https://github.com/Highpeaks01/callvize_app_data_00/raw/main/logo.png" />
          <meta property="og:url" content="https://app.callvize.com" />
          <meta property="og:type" content="website" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full justify-center h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CallsList />
      </div>
    </>
  )
}
