import React, { useEffect, useState } from "react";
import moment from "moment";
import { observer } from "mobx-react";
import "./index.scss";
import useStores from "../../store";
import history from "../../history";
import Pagination from "../components/common/pagination";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<any> {}

const CatalogPage: React.FC<Props> = (props) => {
  const { catalogStore } = useStores();

  return (
    <div id="catalogPage" className="page">
      <h1>目录</h1>
      <ul>
        {catalogStore.catalog.map((item, idx) => (
          <li key={idx}>
            <span
              className="catalog-title"
              title={item.title}
              onClick={(e) => {
                history.push(`/article/${item.id}`);
              }}
            >
              {item.title}
            </span>
            <span className="catalog-time">
              {moment(item.createTime).format("YYYY-MM-DD")}
            </span>
          </li>
        ))}
      </ul>
      <Pagination
        total={catalogStore.count || 100}
        pageSize={catalogStore.perPage}
        current={parseInt(props.match.params.page)}
        onChange={(e) => {
          catalogStore.getCatalog(e);
          history.push(`/catalog/${e}`);
        }}
      />
      {/* <div id="catalogPrev">←</div>
      <div id="catalogNext">→</div>
      <div id="catalogPage">
        第
        <i>
          <b style={{ fontSize: "18px" }}> 1 </b>
        </i>
        页
      </div> */}
    </div>
  );
};

export default observer(CatalogPage);
