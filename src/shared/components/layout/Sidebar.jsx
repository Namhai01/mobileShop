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
            <img className="img-fluid" src={`${URL}/images/banner-1.png`} />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            <img className="img-fluid" src={`${URL}/images/banner-2.png`} />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            <img className="img-fluid" src={`${URL}/images/banner-3.png`} />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            <img className="img-fluid" src={`${URL}/images/banner-4.png`} />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            <img className="img-fluid" src={`${URL}/images/banner-5.png`} />
          </Link>
        </div>
        <div className="banner-item">
          <Link to="#">
            <img className="img-fluid" src={`${URL}/images/banner-6.png`} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
