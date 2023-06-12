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
                        href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz@6..96&family=Cabin&display=swap"
                        rel="stylesheet"
                    ></link>
                    <meta
                        property="og:title"
                        content="Mys page title"
                        key="title"
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
