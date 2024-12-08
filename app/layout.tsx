import type { Metadata } from "next";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const baseURL = 'https://chrisdevcode.co.ke';
const defaultTitle = 'ChrisDevCode';
const defaultDescription = 'ChrisDevCode | technologies that may make sense';
const imagesBaseURL = 'https://nextjs.org';
const creatorName = 'Chris Achinga';

export const metadata: Metadata = {
  title: "ChrisDevCode",
  description: "ChrisDevCode | technologies that may make sense",
  keywords: ['Software Developers', 'Developers in Mombasa', 'Developers in Kenya', 'Python Developers', 'Django Developers in Kenya', 'Django Developers in Mombasa', 'Software Engineers'],
  referrer: 'origin-when-cross-origin',
  creator: 'Chris Achinga',
  publisher: 'ChrisDevCode Technologies',
  applicationName: 'ChrisDevCode',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'ChrisDevCode Technologies',
    description: 'Building technologies that may make sense',
    url: 'https://chrisdevcode.co.ke',
    siteName: 'ChrisDevCode',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    videos: [
      {
        url: 'https://nextjs.org/video.mp4', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    audio: [
      {
        url: 'https://nextjs.org/audio.mp3', // Must be an absolute URL
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png' },
      new URL('/icon.png', 'https://example.com'),
      { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  manifest: 'https://nextjs.org/manifest.json',
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  },
  appleWebApp: {
    title: 'Apple Web App',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/assets/startup/apple-touch-startup-image-768x1004.png',
      {
        url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
