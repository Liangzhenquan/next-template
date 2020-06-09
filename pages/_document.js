/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-06-08 17:46:43
 * @LastEditors: liang
 * @LastEditTime: 2020-06-08 18:20:03
 */
import Document, { Head, Main, NextScript } from "next/document";
import paths from "@/utils/paths";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href={paths.font} />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
