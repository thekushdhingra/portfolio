import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>
      <body className="min-h-[100vh] bg-custom-bg text-white bg-block-pattern bg-[size:block-pattern] bg-[position:block-pattern]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

