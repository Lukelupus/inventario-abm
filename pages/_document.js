import { Html, Head, Main, NextScript } from "next/document"

    function Document() {
  
        return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#000000" />
                <meta
                name="description"
                content=""
                />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                <meta name="robots" content="index, follow"></meta>
                <meta name="googlebot" content="index, follow"></meta>
                <meta property="og:locale" content="pt_BR"></meta>
                <meta property="og:title" content=""></meta>
                <meta></meta>
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        )
    }

    export default Document;

