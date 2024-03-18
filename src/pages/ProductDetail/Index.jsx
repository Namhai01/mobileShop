import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "../../shared/components/layout/Pagination";
import { getImageProduct } from "../../shared/ultils";
import {
  getProductsComment,
  getProductsDetail,
  postProductsComment,
} from "../../services/Api";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/Reduce/cart";
import Comment from "./Comment";

function ProductDetail() {
  const dispatch = useDispatch();
  const [Product, setProduct] = useState({});
  const [Comments, setComment] = useState([]);
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [current, setCurrent] = useState(1);
  const [next, setNext] = useState();
  const [pre, setPre] = useState();
  const [status, setStatus] = useState();
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
      const response = await postProductsComment(id, FormData);
      console.log("Bình luận đã được gửi thành công:", response);
      setFormData({
        name: "",
        email: "",
        content: "",
      });
    } catch (error) {
      console.error("Lỗi khi gửi bình luận:", error);
    }
  };

  useEffect(() => {
    getProductsDetail(id).then((products) => {
      setProduct(products.data);
    });
    getProductsComment(id, current).then((comment) => {
      setComment(comment.data.docs);
      setCurrent(comment.data.pages.currentPage);
      setPre(comment.data.pages.prev);
      setNext(comment.data.pages.next);
      setStatus(comment.data.pages.hasNext);
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
            <img src={getImageProduct(Product?.image)} />
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
              {Product.is_stock ? (
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
            <p>{Product?.details}</p>
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
                  name="name"
                  required
                  type="text"
                  className="form-control"
                  value={FormData.name}
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
                  name="content"
                  required
                  rows={8}
                  className="form-control"
                  value={FormData.content}
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
        <Pagination
          Page={Page}
          status={status}
          pre={pre}
          current={current}
          next={next}
        />
      </div>
    </>
  );
}

export default ProductDetail;
