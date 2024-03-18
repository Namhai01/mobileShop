import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pagination from "../../shared/components/layout/Pagination";
import CardProduct from "../../shared/components/CardProduct";
import { getProducts, getProductsCategory } from "../../services/Api";

function Search() {
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("name");
  const [Search, setSearch] = useState(searchQuery);
  const [products, setProducts] = useState();
  const [current, setCurrent] = useState(1);
  const [next, setNext] = useState();
  const [pre, setPre] = useState();

  useEffect(() => {
    if (Search !== null) {
      setCurrent(1);
    }
  }, [Search]);

  useEffect(() => {
    getProducts(Search, current, {}).then((products) => {
      setProducts(products.data.docs),
        setCurrent(products?.data.pages.currentPage),
        setNext(products?.data.pages.next),
        setPre(products?.data.pages.prev);
    });
  }, [current]);

  const Page = (number) => {
    setCurrent(number);
  };

  return (
    <>
      <CardProduct title={Search} products={products} searchTitle={true} />
      <Pagination Page={Page} pre={pre} current={current} next={next} />
    </>
  );
}

export default Search;
