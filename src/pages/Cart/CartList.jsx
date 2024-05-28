import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImageProduct } from "../../shared/ultils";
import { Link } from "react-router-dom";
import { removeItem, sumPrice, updateQuantity } from "../../redux/Reduce/cart";
import { Bill } from "../../services/Api";

function CartList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.product);
  const cartPrice = useSelector((state) => state.cart.price);
  const handleRemoveToCart = (e, id) => {
    e.preventDefault();
    dispatch(removeItem(id));
  };
  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };
  const handleSumPrice = (e) => {
    e.preventDefault();
    dispatch(sumPrice());
  };

  ///TEST
  // let productInfoArray = [];
  // cartItems.forEach((product) => {
  //   const { name, quantity } = product;
  //   productInfoArray.push({ name, quantity });
  // });
  // useEffect(() => {
  //   Bill({
  //     name: "ok",
  //     phone: 123456,
  //     email: "dgn3072000@gmail.com",
  //     address: "nhà A phố B",
  //     products: productInfoArray,
  //     totalPrice: Number(cartPrice),
  //   });
  // }, [productInfoArray]);

  return (
    <div id="my-cart">
      <div className="row">
        <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">
          Thông tin sản phẩm
        </div>
        <div className="cart-nav-item col-lg-2 col-md-2 col-sm-12">
          Tùy chọn
        </div>
        <div className="cart-nav-item col-lg-3 col-md-3 col-sm-12">Giá</div>
      </div>
      <form method="post">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <div className="cart-item row" key={item?._id}>
              <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                <img
                  src={getImageProduct(item?.thumbnail)}
                  alt={item?.thumbnail}
                />
                <h4>{item?.name}</h4>
              </div>
              <div className="cart-quantity col-lg-2 col-md-2 col-sm-12">
                <input
                  type="number"
                  id="quantity"
                  className="form-control form-blue quantity"
                  defaultValue={1}
                  value={item?.quantity}
                  min={1}
                  onChange={(e) =>
                    handleQuantityChange(item?._id, parseInt(e.target.value))
                  }
                />
              </div>
              <div className="cart-price col-lg-3 col-md-3 col-sm-12">
                <b>{Number(item?.price).toLocaleString("vi-VN")} Đ</b>
                <Link to="#" onClick={(e) => handleRemoveToCart(e, item._id)}>
                  Xóa
                </Link>
              </div>
            </div>
          ))}

        <div className="row">
          <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
            <Link
              onClick={(e) => handleSumPrice(e)}
              id="update-cart"
              className="btn btn-success"
              type="submit"
              name="sbm"
            >
              Cập nhật giỏ hàng
            </Link>
          </div>
          <div className="cart-total col-lg-2 col-md-2 col-sm-12">
            <b>Tổng cộng:</b>
          </div>
          <div className="cart-price col-lg-3 col-md-3 col-sm-12">
            <b>{Number(cartPrice).toLocaleString("vi-VN")} đ</b>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CartList;
