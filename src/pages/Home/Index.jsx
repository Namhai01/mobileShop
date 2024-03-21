import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/Api";
import CardProduct from "../../shared/components/CardProduct";
function Home() {
  const [lastesProducts, setLastesProducts] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);

  useEffect(() => {
    getProducts({ params: { limit: 6, page: 1 } }).then((product) =>
      setLastesProducts(product.Data.products)
    );
    getProducts({ params: { limit: 6, page: 1, featured: true } }).then(
      (product) => setFeaturedProduct(product.Data.products)
    );
  }, []);
  return (
    <div>
      <CardProduct title={"Sản phẩm nổi bật"} products={featuredProduct} />
      <CardProduct title={"Sản phẩm mới"} products={lastesProducts} />
    </div>
  );
}

export default Home;
