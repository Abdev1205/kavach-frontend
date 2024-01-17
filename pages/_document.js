import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/portfoliosmall.jpg" as="image" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#181818" />
        <link rel="icon" href="/images/icons/icon-maskable.png" sizes="192x192" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
