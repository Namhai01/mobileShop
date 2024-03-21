import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Pagination({ Page, pages }) {
  const handleClick = (pageNumber) => {
    Page(pageNumber);
  };
  return (
    <div id="pagination">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to="#">
            Trang trước
          </Link>
        </li>
        {pages?.map((page, index) => (
          <li className="page-item" key={index}>
            <Link
              className="page-link"
              to="#"
              onClick={() => handleClick(page)}
            >
              {page}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link className="page-link" to="#">
            Trang sau
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
