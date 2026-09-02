import Document, { Head, Html, Main, NextScript } from "next/document";

class PakemDiriDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx.locale || "id" };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter&display=optional"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PakemDiriDocument;
