import Link from "next/link";
import { useState } from "react";

const Dropdownns = () => {
  // Separate state hooks for category and price filters
  const [categoryFilter, setCategoryFilter] = useState(true);
  const [priceFilter, setPriceFilter] = useState(true);

  // Toggle functions for category and price filters
  const toggleCategoryFilter = () => {
    setCategoryFilter(!categoryFilter);
  };

  const togglePriceFilter = () => {
    setPriceFilter(!priceFilter);
  };

  return (
    <div className="row">
      {/* Kategoriyalar Filteri */}
      <div className="col-lg-6">
        <div className="accordion-item sidebar_collections__filter sidebar__filter">
          <h2 onClick={toggleCategoryFilter} className="accordion-header sidebar__header" id="filterHeadingFour">
            <button className={`accordion-button ${categoryFilter ? 'active' : ''}`} type="button">
              $20 oddiy tarif
            </button>
          </h2>
          <div id="filter-collapseFour" className={`according_collapse ${categoryFilter ? 'show' : ''}`}>
            <div className="accordion-body sidebar__body">
              <ul>
                <li className="single__col">
                  <label>
                    <span className="col__right text-center">
                      <ins className="col__name">SEO va veb-trafik</ins>
                    </span>
                  </label>
                </li>
                <li className="single__col">
                  <label>
                    <span className="col__right">
                      <ins className="col__name">Orqaga havolalar</ins>
                    </span>
                  </label>
                </li>
                <li className="single__col">
                  <label>
                    <span className="col__right">
                      <ins className="col__name">Ijtimoiy tarmoq profillari</ins>
                    </span>
                  </label>
                </li>
                <li className="single__col">
                  <label>
                    <span className="col__right">
                      <ins className="col__name">Collectibles</ins>
                    </span>
                  </label>
                </li>
                <li className="single__col">
                  <label>
                    <span className="col__right">
                      <ins className="col__name">Sports</ins>
                    </span>
                  </label>
                </li>
              </ul>
              <div className=" mt-50 d-flex align-items-center justify-content-center gap-4">
                  <Link className="Order" legacyBehavior href="/">
  <a style={{borderRadius:'25px'}} className="ps-5 pe-5 varient-2 btn btn-primary d-flex align-items-center px-4 py-3  shadow-sm hover-shadow">
    <svg width="18" height="19" fill="none" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.775 3.61794C11.0224 3.39694 10.192 3.25244 9.27502 3.25244C5.13143 3.25244 1.77502 6.55046 1.77502 10.622C1.77502 14.702 5.13143 18 9.27502 18C13.4186 18 16.775 14.702 16.775 10.6305C16.775 9.11747 16.3079 7.70646 15.512 6.53346" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12.848 3.82201L10.348 1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12.8478 3.82202L9.93256 5.91303" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
    Xizmat narxi $20
  </a>
</Link>


                  </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Filteri */}
      <div className="col-lg-6">
        <div className="accordion-item sidebar_collections__filter sidebar__filter">
          <h2 onClick={togglePriceFilter} className="accordion-header sidebar__header" id="filterHeadingFive">
            <button className={`accordion-button ${priceFilter ? 'active' : ''}`} type="button">
              $40 Premium
            </button>
          </h2>
          <div id="filter-collapseFive" className={`according_collapse ${priceFilter ? 'show' : ''}`}>
            <div className="accordion-body sidebar__body">
              <ul>
                <li className="single__col text-center">
                  <label>
                    <span className="col__right">
                      <ins className="col__name">10 kunda yetkazib berish</ins>
                    </span>
                  </label>
                </li>
                <li className="single__col text-center">
                  <label>
                    <span className="col__right">
                      <ins className="col__name">Cheksiz o'zgartirish</ins>
                    </span>
                  </label>
                </li>
                <li className="single__col text-center">
                  <label>
                    <span className="col__right">
                      <ins className="col__name">Musicswdesfg</ins>
                    </span>
                  </label>
                </li>
                <li className="single__col text-center">
                  <label>
                    <span className="col__right">
                      <ins className="col__name">Collectiblesqswdefrgth</ins>
                    </span>
                  </label>
                </li>
                <li className="single__col text-center">
                  <label>
                    <span className="col__right">
                      <ins className="col__name">Sportssasdfghjhgfdsfdgh</ins>
                    </span>
                  </label>
                  <div className="more-load-wrap mt-50 d-flex align-items-center justify-content-center gap-4">
                  <Link className="Order" legacyBehavior href="/">
  <a style={{borderRadius:'25px'}} className="!nft__title ps-5 pe-5 varient-2 btn btn-primary d-flex align-items-center px-4 py-3  shadow-sm hover-shadow">
    <svg width="18" height="19" fill="none" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.775 3.61794C11.0224 3.39694 10.192 3.25244 9.27502 3.25244C5.13143 3.25244 1.77502 6.55046 1.77502 10.622C1.77502 14.702 5.13143 18 9.27502 18C13.4186 18 16.775 14.702 16.775 10.6305C16.775 9.11747 16.3079 7.70646 15.512 6.53346" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12.848 3.82201L10.348 1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M12.8478 3.82202L9.93256 5.91303" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
    Xizmat narxi $40
  </a>
</Link>


                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdownns;
