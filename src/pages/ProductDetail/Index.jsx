import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "../../shared/components/layout/Pagination";
import { getImageProduct } from "../../shared/ultils";
import { getProductsDetail, postProductsComment } from "../../services/Api";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/Reduce/cart";
import Comment from "./Comment";

function ProductDetail() {
  const dispatch = useDispatch();
  const [Product, setProduct] = useState({});
  const [Comments, setComment] = useState([]);
  const [FormData, setFormData] = useState({
    full_name: "",
    email: "",
    body: "",
  });
  const [current, setCurrent] = useState(1);
  const [pages, setPages] = useState();
  const { id } = useParams();

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (Product.is_stock) {
      dispatch(addItem(Product));
      toast.success("Đã thêm vào giỏ hàng !");
    } else {
      toast.info("Sản phẩm hiện đang hết hàng");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await postProductsComment(id, FormData);
      setFormData({
        full_name: "",
        email: "",
        body: "",
      });
    } catch (error) {
      console.error("Lỗi khi gửi bình luận:", error);
    }
  };

  useEffect(() => {
    getProductsDetail(id, { params: { page: current } }).then((products) => {
      setProduct(products?.Data.docs.product);
      setComment(products?.Data.docs.Comment);
      setPages(products?.Pages);
    });
  }, [id, current]);

  const Page = (number) => {
    setCurrent(number);
  };

  return (
    <>
      <ToastContainer position="top-right" closeOnClick={true} />
      <div id="product">
        <div id="product-head" className="row">
          <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
            <img src={getImageProduct(Product?.thumbnail)} />
          </div>
          <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
            <h1>{Product?.name}</h1>
            <ul>
              <li>
                <span>Bảo hành:</span> {Product?.warranty}
              </li>
              <li>
                <span>Đi kèm:</span> {Product?.accessories}
              </li>
              <li>
                <span>Tình trạng:</span> {Product?.status}
              </li>
              <li>
                <span>Khuyến Mại:</span> {Product?.promotion}
              </li>
              <br />
              <li id="price">Giá Bán (chưa bao gồm VAT)</li>
              <li id="price-number">
                {Product?.price
                  ? parseFloat(Product.price).toLocaleString("vi-VN")
                  : "N/A"}{" "}
                Đ
              </li>
              {Product?.is_stock ? (
                <li id="status">Còn hàng</li>
              ) : (
                <li id="status" className="text-danger">
                  hết hàng
                </li>
              )}
            </ul>
            <div id="add-cart">
              <Link to="#" onClick={handleAddToCart}>
                Mua ngay
              </Link>
            </div>
          </div>
        </div>
        <div id="product-body" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>Đánh giá về {Product?.name}</h3>
            <p>{Product?.description}</p>
          </div>
        </div>
        {/*	Comment	*/}
        <div id="comment" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>Bình luận sản phẩm</h3>
            <form method="post" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Tên:</label>
                <input
                  name="full_name"
                  required
                  type="text"
                  className="form-control"
                  value={FormData.full_name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  name="email"
                  required
                  type="email"
                  className="form-control"
                  id="pwd"
                  value={FormData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Nội dung:</label>
                <textarea
                  name="body"
                  required
                  rows={8}
                  className="form-control"
                  value={FormData.body}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" name="sbm" className="btn btn-primary">
                Gửi
              </button>
            </form>
          </div>
        </div>
        <Comment Comments={Comments} />
        {Comments.length > 1 ? <Pagination Page={Page} pages={pages} /> : null}
      </div>
    </>
  );
}

export default ProductDetail;
