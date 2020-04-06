import React, { useEffect, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Markdown from "../components/common/Markdown";
import axios from "axios";
import "./index.scss";
import moment from "moment";

interface Props extends RouteComponentProps<any> {}

const ArticlePage: React.FC<Props> = (props) => {
  const [article, setArticle] = useState<{
    id: number;
    createTime: string;
    title: string;
    abstractText: string;
    html: string;
    text: string;
  } | null>(null);

  useEffect(() => {
    console.log(props.match);
    const { id } = props.match.params;

    axios
      .post("https://blog.crazymad.top/api/article/detail", {
        id,
      })
      .then((res) => {
        if (res?.data?.state === 1) {
          setArticle(res?.data?.data ?? null);
        }
      });
  }, []);

  return (
    <div id="articlePage" className="page">
      <div className="article-header">
        <h2>{article?.title ?? ""}</h2>
        <p>{moment(article?.createTime).format("YYYY-MM-DD")}</p>
      </div>
      <Markdown content={article?.text ?? ""} />
    </div>
  );
};

export default withRouter(ArticlePage);
