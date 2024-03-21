import Http from "./Http";
//product
export const getProducts = (config) => Http.get(`/products`, config);
export const findProducts = (config) => Http.get(`/products/search`, config);
export const getProductsDetail = (id, config) =>
  Http.get(`/product/${id}`, config);
//Procduct comment
export const postProductsComment = (id, config) =>
  Http.post(`/products/${id}/comments`, config);
//category
export const getProductsCategory = (id, config) =>
  Http.get(`/categories/${id}/products`, config);
export const getCategory = (id, config) =>
  Http.get(`/categories/${id}`, config);
export const getCategories = (config) => Http.get("/categories", config);
