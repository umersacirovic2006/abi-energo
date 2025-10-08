import { Metadata } from "next";
import { Html, Head, Main, NextScript } from "next/document";

export const metadata: Metadata = {
  title: 'Hayat Energy',
  description: 'Empowering the future with clean, sustainable energy solutions.',
  metadataBase: new URL('https://hayatenergy.com'),
  openGraph: {
    title: 'Hayat Energy',
    description: 'Empowering the future with clean, sustainable energy solutions.',
    url: 'https://hayatenergy.com',
    images: ['/logo.png'],
  },
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
