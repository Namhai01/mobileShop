import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsCategory } from "../../services/Api";
import Pagination from "../../shared/components/layout/Pagination";
import CardProduct from "../../shared/components/CardProduct";

function Categories() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [title, setTitle] = useState();
  const [products, setProducts] = useState();
  const [current, setCurrent] = useState(1);
  const [pages, setPages] = useState();

  useEffect(() => {
    getProductsCategory(id, { params: { limit: 15, page: current } }).then(
      (category) => {
        setTitle(category?.Data.filters.Title);
        setProducts(category?.Data.products);
        setItem(category?.Data.filters.Total);
        setPages(category?.Pages);
      }
    );
    setCurrent(1);
  }, [id]);

  useEffect(() => {
    getProductsCategory(id, { params: { limit: 15, page: current } }).then(
      (category) => {
        setProducts(category?.Data.products);
        setPages(category?.Pages);
      }
    );
  }, [current]);

  const Page = (number) => {
    setCurrent(number);
  };

  return (
    <div>
      <CardProduct
        title={`${title} (hiện có ${item} sản phẩm) `}
        products={products}
      />
      {item ? <Pagination Page={Page} pages={pages} /> : null}
    </div>
  );
}

export default Categories;
