import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../../services/Api";
function Menu() {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories({}).then(({ data }) => {
      setCategories(data.docs);
    });
  }, []);

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <nav>
          <div id="menu" className="collapse navbar-collapse">
            <ul>
              {Categories?.map((index) => (
                <li key={index._id} className="menu-item">
                  <Link to={`/Categories/${index._id}`}>{index.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
