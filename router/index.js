/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-06-08 14:12:13
 * @LastEditors: liang
 * @LastEditTime: 2020-06-08 15:29:36
 */
import Router from "next/router";
const handleRouteChange = (url) => {
  // console.log("路由改变至: ", url);
};

Router.events.on("routeChangeStart", handleRouteChange);

export default Router;
