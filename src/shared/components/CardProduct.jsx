import React from "react";
import ProductItem from "./product-item";

function CardProduct({ title, products, searchTitle }) {
  return (
    <div className="products">
      {searchTitle ? (
        <div id="search-result">
          Kết quả tìm kiếm với từ khoá <span>{title}</span>
        </div>
      ) : (
        <h3>{title}</h3>
      )}
      {/* <h3>{title}</h3> */}
      <div className="product-list card-deck">
        {products?.map((item) => (
          <ProductItem item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default CardProduct;
