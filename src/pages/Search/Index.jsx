import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../shared/components/layout/Pagination";
import CardProduct from "../../shared/components/CardProduct";
import { findProducts } from "../../services/Api";

function Search() {
  const [Search, setSearch] = useSearchParams();
  const keyword = Search.get("key");
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pages, setPages] = useState();

  useEffect(() => {
    findProducts({
      params: { key: keyword, limit: 15, page: current },
    }).then((products) => {
      setProducts(products?.Data.products);
      setPages(products?.Pages);
    });
  }, [keyword, current]);

  const Page = (number) => {
    setCurrent(number);
  };

  return (
    <>
      <CardProduct title={keyword} products={products} searchTitle={true} />
      <Pagination Page={Page} pages={pages} current={current} />
    </>
  );
}

export default Search;
