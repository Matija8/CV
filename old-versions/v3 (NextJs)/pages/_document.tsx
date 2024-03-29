import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(props: unknown) {
  return (
    <Html lang="en-US">
      <Head>
        {/* https://fonts.google.com/ */}

        {/* https://fonts.google.com/specimen/Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
