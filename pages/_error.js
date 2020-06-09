/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-06-09 09:45:31
 * @LastEditors: liang
 * @LastEditTime: 2020-06-09 10:06:49
 */
import React from "react";
import { Result } from "antd";
export default class Error extends React.Component {
  state = {
    status: {
      "404": "抱歉，页面找不到",
      "403": "权限不足",
    },
  };
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    const { status } = this.state;
    if (statusCode === 404) {
      return (
        <Result
          status={statusCode}
          title={statusCode}
          subTitle={status[statusCode]}
        />
      );
    }
    return <p>客户端发生错误</p>;
  }
}
