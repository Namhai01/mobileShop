import { BASE_URL } from "../constants/app";

export const getImageProduct = (imageName) => {
  return `${BASE_URL}/static/uploads/images/${imageName}`;
};
