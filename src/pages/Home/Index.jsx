import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/Api";
import CardProduct from "../../shared/components/CardProduct";
function Home() {
  const [lastesProducts, setLastesProducts] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);

  useEffect(() => {
    getProducts(
      {},
      {},
      {
        params: { limit: 6 },
      }
    ).then((product) => setLastesProducts(product.data.docs));
    getProducts(
      {},
      {},
      {
        params: { limit: 6, "filter[is_featured]": true },
      }
    ).then((product) => setFeaturedProduct(product.data.docs));
  }, []);
  return (
    <div>
      <CardProduct title={"Sản phẩm nổi bật"} products={featuredProduct} />
      <CardProduct title={"Sản phẩm mới"} products={lastesProducts} />
    </div>
  );
}

export default Home;
