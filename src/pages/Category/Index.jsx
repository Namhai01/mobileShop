import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory, getProductsCategory } from "../../services/Api";
import Pagination from "../../shared/components/layout/Pagination";
import CardProduct from "../../shared/components/CardProduct";

function Categories() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [title, setTitle] = useState();
  const [products, setProducts] = useState();
  const [current, setCurrent] = useState(1);
  const [next, setNext] = useState();
  const [pre, setPre] = useState();

  useEffect(() => {
    getCategory(id).then((item) => {
      setTitle(item?.data.name);
    });
    getProductsCategory(id).then((category) => {
      setItem(category?.data.items.total);
      setProducts(category?.data.docs);
      setCurrent(category?.data.pages.currentPage);
      setNext(category?.data.pages.next);
      setPre(category?.data.pages.prev);
    });
    setCurrent(1);
  }, [id]);

  useEffect(() => {
    getProductsCategory(id, current).then((category) => {
      setItem(category?.data.items.total);
      setProducts(category?.data.docs);
      setCurrent(category?.data.pages.currentPage);
      setNext(category?.data.pages.next);
      setPre(category?.data.pages.prev);
    });
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
      {item ? (
        <Pagination Page={Page} pre={pre} current={current} next={next} />
      ) : null}
    </div>
  );
}

export default Categories;
