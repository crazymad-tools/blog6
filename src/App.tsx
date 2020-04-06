import React, { Fragment, useEffect } from "react";
import IndexPage from "./pages/IndexPage";
import history from "./history";
import { Router, Route, Link } from "react-router-dom";
import Footer from "./pages/components/Footer";
import CatalogPage from "./pages/CatalogPage";
import catalogStore from './store/catalog';
import ArticlePage from "./pages/ArticlePage";

function App() {
  useEffect(() => {
    // catalogStore.getCatalog();
  }, []);

  return (
    <div className="App page">
      <Router history={history}>
        <nav>
          <Link className="link" to="/">序言</Link>
          <Link className="link" to="/catalog/1">目录</Link>
          {/* <Link className="link" to="/column">专栏</Link>
          <Link className="link" to="/memery">往昔</Link> */}
        </nav>
        <main>
          <Route path="/" component={IndexPage} exact />
          <Route path="/catalog/:page" component={CatalogPage} />
          <Route path="/article/:id" component={ArticlePage} />
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
