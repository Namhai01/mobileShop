import React from "react";
import { URL } from "../../constants/app";

function Footer() {
  return (
    <>
      <div id="footer-top">
        <div className="container">
          <div className="row">
            <div id="logo-2" className="col-lg-3 col-md-6 col-sm-12">
              <h2>
                <a href="#">
                  <img
                    className="img-fluid"
                    width={100}
                    src={`${URL}/images/logo_footer.png`}
                  />
                </a>
              </h2>
              <p>
                Chào mừng bạn đến với Mobile Shop - điểm đến tin cậy cho tất cả
                các nhu cầu về điện thoại di động của bạn! Tại Mobile Shop,
                chúng tôi cung cấp đa dạng các dòng điện thoại chính hãng từ các
                thương hiệu hàng đầu, đảm bảo chất lượng và giá cả cạnh tranh.
                Đội ngũ nhân viên chuyên nghiệp và nhiệt tình của chúng tôi luôn
                sẵn sàng tư vấn và hỗ trợ bạn chọn lựa sản phẩm phù hợp nhất.
                Hãy đến với Mobile Shop để trải nghiệm dịch vụ tuyệt vời và sở
                hữu những chiếc điện thoại đẳng cấp ngay hôm nay!
              </p>
            </div>
            <div id="address" className="col-lg-3 col-md-6 col-sm-12">
              <h3>Địa chỉ</h3>
              <p>Cơ sở 1: Số A - ngõ B - Hà Nội</p>
              <p>Cơ sở 2: Số A - quận B - TP.Hồ Chí Minh</p>
            </div>
            <div id="service" className="col-lg-3 col-md-6 col-sm-12">
              <h3>Dịch vụ</h3>
              <p>Bảo hành rơi vỡ, ngấm nước Care Diamond</p>
              <p>Bảo hành Care X60 rơi vỡ ngấm nước vẫn Đổi mới</p>
            </div>
            <div id="hotline" className="col-lg-3 col-md-6 col-sm-12">
              <h3>Hotline</h3>
              <p>Phone Sale: (+84) 090123123</p>
              <p>Email: mobileshop@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <p>2024 © Copyright belongs to Mobile Shop.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
