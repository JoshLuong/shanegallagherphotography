import Document, { Head, Html, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz@6..96&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Cabin&display=optimal"
                        rel="stylesheet"
                    ></link>
                    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"></link>
                    <meta
                        property="og:title"
                        content="Shane Gallagher Photography"
                        key="title"
                    />
                    <meta
                        name="google-site-verification"
                        content="G4rlfdjaKDHnz_tSloRizbccMB7yh9ClCmh-SH9wd2A"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default MyDocument
