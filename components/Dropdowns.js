import React, { useState } from 'react';


const Dropdownns = () => {
  const [categoryFilter, setCategoryFilter] = useState(true);
  const [priceFilter, setPriceFilter] = useState(true);

  const toggleCategoryFilter = () => setCategoryFilter(!categoryFilter);
  const togglePriceFilter = () => setPriceFilter(!priceFilter);

  return (
    <div className="dropdowns-container container  col-12">
    <div className=' '>
    <div className="pricing-card  mt-2 mb-2 ">
        <h2 onClick={toggleCategoryFilter} className="pricing-header">
          $20 oddiy tarif
          <span className={`arrow ${categoryFilter ? 'up' : 'down'}`}></span>
        </h2>
        <div className={`pricing-content  ${categoryFilter ? 'show' : ''}`}>
          <ul className="feature-list">
            <li>SEO va veb-trafik</li>
            <li>Orqaga havolalar</li>
            <li>Ijtimoiy tarmoq profillari</li>
            <li>Collectibles</li>
            <li>Sports</li>
          </ul>
          <a href="/" className="order-button">
            <span className="icon"></span>
            Xizmat narxi $20
          </a>
        </div>
      </div>

      <div className="pricing-card premium mt-2 mb-2 " >
        <h2 onClick={togglePriceFilter} className="pricing-header">
          $40 Premium
          <span className={`arrow ${priceFilter ? 'up' : 'down'}`}></span>
        </h2>
        <div className={`pricing-content  ${priceFilter ? 'show' : ''}`}>
          <ul className="feature-list">
            <li>10 kunda yetkazib berish</li>
            <li>Cheksiz o'zgartirish</li>
            <li>Musicswdesfg</li>
            <li>Collectiblesqswdefrgth</li>
            <li>Sportssasdfghjhgfdsfdgh</li>
          </ul>
          <a href="/" className="order-button">
            <span className="icon"></span>
            Xizmat narxi $40
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dropdownns;
