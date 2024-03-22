import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Pagination({ Page, pages, current }) {
  const handleClick = (pageNumber) => {
    Page(pageNumber);
  };
  return (
    <div id="pagination">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            to="#"
            onClick={() => handleClick(Math.max(1, current - 1))}
          >
            Trang trước
          </button>
        </li>
        {pages?.map((page, index) => (
          <li className="page-item" key={index}>
            <button
              className="page-link"
              to="#"
              onClick={() => handleClick(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className="page-link"
            to="#"
            onClick={() => handleClick(Math.min(current + 1, pages.length))}
          >
            Trang sau
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
