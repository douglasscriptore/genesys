import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                    <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/> */}
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700;900&family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet"/>
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
                    {/* <title>Document</title> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}