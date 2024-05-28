import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../../constants/app";
import { findProducts } from "../../../services/Api";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [Suggest, setSuggest] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      setSearchTimeout(
        setTimeout(() => {
          // Gọi API ở đây với giá trị searchTerm
          findProducts({
            params: { key: searchTerm },
          }).then((res) => setSuggest(res.Data.suggest));
        }, 500)
      );
    }
  }, [searchTerm]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    return navigate(`/search/?key=${searchTerm}`);
  };
  const count = useSelector((state) => state.cart.counter);
  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div id="logo" className="col-lg-3 col-md-3 col-sm-12">
            <h1>
              <Link to="/">
                <img
                  className="img-fluid"
                  width={150}
                  src={`${URL}/images/logo_header.png`}
                />
              </Link>
            </h1>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="search-container">
              <form className="form-inline">
                <input
                  className="form-control mt-3"
                  type="search"
                  name="key"
                  placeholder="Tìm kiếm"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button
                  className="btn btn-danger mt-3"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Tìm kiếm
                </button>
              </form>
              {Suggest.length > 0 && (
                <ul className="suggestion-list">
                  {Suggest.map((suggestion) => (
                    <li key={suggestion._id}>{suggestion.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div id="cart" className="col-lg-3 col-md-3 col-sm-12">
            <Link className="mt-4 mr-2" to="/cart">
              giỏ hàng
            </Link>
            <span className="mt-3">{count}</span>
          </div>
        </div>
      </div>
      {/* Toggler/collapsibe Button */}
      <button
        className="navbar-toggler navbar-light"
        type="button"
        data-toggle="collapse"
        data-target="#menu"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  );
}

export default Header;
