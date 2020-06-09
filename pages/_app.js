/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-06-08 13:42:13
 * @LastEditors: liang
 * @LastEditTime: 2020-06-08 18:14:51
 */
import App from "next/app";
import React from "react";
import "@/styles/index.less";

import Router from "@/router";
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
