import React, { useEffect, useState } from "react";
import "./index.scss";
import Markdown from "../components/common/Markdown";
import axios from "axios";

interface Props {}

const CoverPage: React.FC<Props> = (props) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("/md/index.md").then((res) => {
      setContent(res.data);
    });
  }, []);

  return (
    <div id="index" className="page">
      <h1 className="index-title">Paranoid's Blog</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="cover-header" />
        <div style={{ marginLeft: "20px" }}>
          <p>作者：crazy_mad</p>
          <p>邮箱：2116913961@qq.com&emsp;crazymad0601@gmail.com</p>
          <p>
            爱好：写代码、<del>画漫画</del>、<b>打游戏</b>
          </p>
        </div>
      </div>
      <Markdown content={content} />
    </div>
  );
};

export default CoverPage;
