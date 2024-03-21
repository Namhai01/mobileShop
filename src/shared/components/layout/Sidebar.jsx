import React from "react";
import { Link } from "react-router-dom";
import { URL } from "../../constants/app";
// import Lazyimg from "./Lazyimg";

function Sidebar() {
  return (
    <div id="sidebar" className="col-lg-4 col-md-12 col-sm-12">
      <div id="banner">
        <div className="banner-item">
          <Link to="#">
            {/* <Lazyimg src="http://localhost:5173/images/banner-1.png" /> */}
            <img className="img-fluid" src={`${URL}/images/banner-1.png`} />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            {/* <Lazyimg src="http://localhost:5173/images/banner-2.png" /> */}
            <img
              className="img-fluid"
              src="http://localhost:5173/images/banner-2.png"
            />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            {/* <Lazyimg src="http://localhost:5173/images/banner-3.png" /> */}
            <img
              className="img-fluid"
              src="http://localhost:5173/images/banner-3.png"
            />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            {/* <Lazyimg src="http://localhost:5173/images/banner-4.png" /> */}
            <img
              className="img-fluid"
              src="http://localhost:5173/images/banner-4.png"
            />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            {/* <Lazyimg src="http://localhost:5173/images/banner-5.png" /> */}
            <img
              className="img-fluid"
              src="http://localhost:5173/images/banner-5.png"
            />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            {/* <Lazyimg src="http://localhost:5173/images/banner-6.png" /> */}
            <img
              className="img-fluid"
              src="http://localhost:5173/images/banner-6.png"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
