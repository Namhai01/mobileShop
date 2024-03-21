import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pagination from "../../shared/components/layout/Pagination";
import CardProduct from "../../shared/components/CardProduct";
import {
  findProducts,
  getProducts,
  getProductsCategory,
} from "../../services/Api";

function Search() {
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("name");
  const [Search, setSearch] = useState(searchQuery);
  const [products, setProducts] = useState();
  const [current, setCurrent] = useState(1);
  const [pages, setPages] = useState();

  useEffect(() => {
    if (Search !== null) {
      setCurrent(1);
    }
  }, [Search]);

  useEffect(() => {
    findProducts({ params: { key: Search, limit: 15, page: current } }).then(
      (products) => {
        setProducts(products.Data.products);
        setPages(products?.Pages);
      }
    );
  }, [current]);

  const Page = (number) => {
    setCurrent(number);
  };

  return (
    <>
      <CardProduct title={Search} products={products} searchTitle={true} />
      <Pagination Page={Page} pages={pages} />
    </>
  );
}

export default Search;
