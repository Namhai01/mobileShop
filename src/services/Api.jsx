import Http from "./Http";

export const getProducts = (name, page, config) =>
  Http.get(`/products/?name=${name}&page=${page}`, config);
export const getProductsDetail = (id, config) =>
  Http.get(`/products/${id}`, config);
export const getProductsComment = (id, page, config) =>
  Http.get(`/products/${id}/comments/?page=${page}`, config);
export const postProductsComment = (id, config) =>
  Http.post(`/products/${id}/comments`, config);
export const getProductsCategory = (id, page, config) =>
  Http.get(`/categories/${id}/products/?page=${page}`, config);
export const getCategory = (id, config) =>
  Http.get(`/categories/${id}`, config);
export const getCategories = (config) => Http.get("/categories", config);
