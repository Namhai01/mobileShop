import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Pagination({ pre, current, next, Page, status }) {
  const handleClick = (pageNumber) => {
    Page(pageNumber);
  };

  return (
    <div id="pagination">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to="#" onClick={() => handleClick(pre)}>
            Trang trước
          </Link>
        </li>
        {pre !== 0 ? (
          <>
            <li className="page-item">
              <Link
                className="page-link"
                to="#"
                onClick={() => handleClick(pre)}
              >
                {pre}
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="#">
                {current}
              </Link>
            </li>
            {next !== 0 && (
              <li className="page-item">
                <Link
                  className="page-link"
                  to="#"
                  onClick={() => handleClick(next)}
                >
                  {next}
                </Link>
              </li>
            )}
          </>
        ) : (
          <>
            <li className="page-item active">
              <Link className="page-link" to="#">
                {current}
              </Link>
            </li>
            {next !== 0 && (
              <li className="page-item">
                <Link
                  className="page-link"
                  to="#"
                  onClick={() => handleClick(next)}
                >
                  {next}
                </Link>
              </li>
            )}
          </>
        )}

        <li className="page-item">
          <Link className="page-link" to="#" onClick={() => handleClick(next)}>
            Trang sau
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
