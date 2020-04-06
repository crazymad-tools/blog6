import { observable, action } from "mobx";
import axios from "axios";
import { throws } from "assert";

export type CatalogItem = {
  id: string;
  createTime: string;
  html: string;
  title: string;
};

class CatalogStore {
  @observable
  catalog: CatalogItem[] = [];

  @observable
  count: number = 0;

  @observable
  perPage: number = 20;

  @observable
  current: number = 1;

  @action.bound
  getCatalog(current?: number) {
    this.current = current ?? this.current;
    // this.catalog = [];
    axios.post("https://blog.crazymad.top/api/tag/count").then((res) => {
      if (res?.data?.state === 1) {
        this.count = res.data.data ?? 0;
        axios
          .post("https://blog.crazymad.top/api/article/list", {
            currentPage: this.current,
            // pageSize: this.count,
            pageSize: this.perPage,
          })
          .then((res) => {
            if (res?.data?.state === 1) {
              this.catalog = res?.data?.data ?? [];
            }
          });
      }
    });
  }
}

export default new CatalogStore();
