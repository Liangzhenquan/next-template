/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-06-08 11:06:22
 * @LastEditors: liang
 * @LastEditTime: 2020-06-08 15:21:43
 */
import React from "react";
import { Button } from "antd";
import Link from "next/link";
export default function index() {
  return (
    <div className="test">
      123
      <Link href="/about">
        <a>here</a>
      </Link>
      <Link href="/article/123">
        <a>文章</a>
      </Link>
      <Button>123</Button>
    </div>
  );
}
