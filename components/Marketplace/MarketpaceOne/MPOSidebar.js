import { useState } from "react";
import { FaSearch, FaLink, FaUsers, FaTrophy, FaChartBar } from "react-icons/fa";

const CategorySidebar = () => {
  const [CategoryFilter, setCategoryFilter] = useState(true);

  return (
    <div className="col-lg-3 category-sidebar">
      <div className="accordion-item sidebar_collections__filter sidebar__filter">
        <h2
          onClick={() => setCategoryFilter(!CategoryFilter)}
          className="accordion-header sidebar__header"
          id="filterHeadingFour"
        >
          <button className={`accordion-button ${CategoryFilter ? "active" : ""}`} type="button">
            Kategoriyalar
          </button>
        </h2>
        <div
          id="filter-collapseFour"
          className={`according_collapse ${CategoryFilter ? "show" : ""}`}
        >
          <div className="accordion-body sidebar__body">
            <ul>
              <li className="single__col">
                <label>
                  <span className="col__right">
                    <FaChartBar className="cate_icon" />
                    <ins className="col__name">SEO va veb-trafik</ins>
                  </span>
                </label>
              </li>
              <li className="single__col">
                <label>
                  <span className="col__right">
                    <FaLink className="cate_icon" />
                    <ins className="col__name">Orqaga havolalar</ins>
                  </span>
                </label>
              </li>
              <li className="single__col">
                <label>
                  <span className="col__right">
                    <FaUsers className="cate_icon" />
                    <ins className="col__name">Ijtimoiy tarmoq profillari</ins>
                  </span>
                </label>
              </li>
              <li className="single__col">
                <label>
                  <span className="col__right">
                    <FaTrophy className="cate_icon" />
                    <ins className="col__name">Collectibles</ins>
                  </span>
                </label>
              </li>
              <li className="single__col">
                <label>
                  <span className="col__right">
                    <FaTrophy className="cate_icon" />
                    <ins className="col__name">Sports</ins>
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
