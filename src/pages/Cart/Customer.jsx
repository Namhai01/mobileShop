import React from "react";

function Customer() {
  return (
    <div id="customer">
      <form method="post">
        <div className="row">
          <div id="customer-name" className="col-lg-4 col-md-4 col-sm-12">
            <input
              placeholder="Họ và tên (bắt buộc)"
              type="text"
              name="name"
              className="form-control"
              required
            />
          </div>
          <div id="customer-phone" className="col-lg-4 col-md-4 col-sm-12">
            <input
              placeholder="Số điện thoại (bắt buộc)"
              type="text"
              name="phone"
              className="form-control"
              required
            />
          </div>
          <div id="customer-mail" className="col-lg-4 col-md-4 col-sm-12">
            <input
              placeholder="Email (bắt buộc)"
              type="text"
              name="mail"
              className="form-control"
              required
            />
          </div>
          <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
            <input
              placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)"
              type="text"
              name="add"
              className="form-control"
              required
            />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="by-now col-lg-6 col-md-6 col-sm-12">
          <a href="#">
            <b>Mua ngay</b>
            <span>Giao hàng tận nơi siêu tốc</span>
          </a>
        </div>
        <div className="by-now col-lg-6 col-md-6 col-sm-12">
          <a href="#">
            <b>Trả góp Online</b>
            <span>Vui lòng call (+84) 0988 550 553</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Customer;
