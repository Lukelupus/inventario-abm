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
                <meta name="keywords" content="Inventário, inventário, belo horizonte, BH, como fazer?, preciso fazer, Cartório" />
                <meta name="author" content="Alves, Bretas & Machado" />
                <meta name="robots" content="index, follow"></meta>
                <meta name="googlebot" content="index, follow"></meta>
                <meta property="og:site_name" content="Inventário - Alves, Bretas & Machado"></meta>
                <meta property="og:locale" content="pt_BR"></meta>
                <meta property="og:image:width" content="1000"></meta>
                <meta property="og:image:height" content="667"></meta>
                <meta></meta>   
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        )
    }

    export default Document;

