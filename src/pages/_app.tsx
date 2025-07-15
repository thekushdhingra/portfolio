import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "prismjs/themes/prism.css";
import "@/styles/code.css";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kush Dhingra</title>
        <meta name="description" content="Kush Dhingra" />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg stroke='%2311111b' fill='%2311111b' stroke-width='0' viewBox='0 0 16 16' height='200px' width='200px' xmlns='http://www.w3.org/2000/svg' style='background-color: %23cdd6f4;'%3E%3Cpath d='M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6'%3E%3C/path%3E%3C/svg%3E%0A"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
