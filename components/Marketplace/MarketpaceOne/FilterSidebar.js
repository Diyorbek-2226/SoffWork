import React from "react";

export default function FilterSidebar() {
  return (
    <div className="sidebar  ">
      <h3 className="sidebar-title">Kategoriyalar</h3>
      <ul className="category-list">
        <li>
          <span>SEO va web-trafik</span>
          <ul>
            <li>Orqaga havolalar</li>
            <ul>
              <li>Maqolalar</li>
              <li>Forumlar</li>
              <li>Kataloglar</li>
              <li>Profillar</li>
              <li>Fikrlar</li>
              <li>Ijtimoiy tarmoq profillari</li>
            </ul>
          </ul>
        </li>
      </ul>
      <div className="filter-section">
        <div className="filter-item">
          <label>Moz domen ma'muriyati <span title="Ma'lumot">?</span></label>
          <div className="filter-range">
            <input type="text" placeholder="Kimdan" />
            <input type="text" placeholder="Kimga" />
          </div>
        </div>
        <div className="filter-item">
          <label>Moz spam reytingi <span title="Ma'lumot">?</span></label>
          <div className="filter-range">
            <input type="text" placeholder="Kimdan" />
            <input type="text" placeholder="Kimga" />
          </div>
        </div>
        <div className="filter-item">
          <label>Majestic CF <span title="Ma'lumot">?</span></label>
          <div className="filter-range">
            <input type="text" placeholder="Kimdan" />
            <input type="text" placeholder="Kimga" />
          </div>
        </div>
        <div className="filter-item">
          <label>Oylik trafik <span title="Ma'lumot">?</span></label>
          <div className="filter-range">
            <input type="text" placeholder="Kimdan" />
            <input type="text" placeholder="Kimga" />
          </div>
        </div>
        <div className="filter-item">
          <label>Veb-sayt tili</label>
          <div className="language-options">
            <label className="d-flex align-items-center">
              <input type="checkbox" /> <span>Rus</span>
            </label>
            <label className="d-flex align-items-center">
              <input type="checkbox" /> <span>Uzbek</span>
            </label>
            <label className="d-flex align-items-center">
              <input type="checkbox" /> <span>English</span>
            </label>
          </div>
        </div>
        <div className="filter-item">
          <label>Narxi</label>
          <ul>
            <li>10 dollar</li>
            <li>20-70 dollar</li>
            <li>80-550 dollar</li>
            <li>$600+</li>
          </ul>
          <div className="filter-range">
            <input type="text" placeholder="$ min." />
            <input type="text" placeholder="$ maks." />
          </div>
        </div>
        <div className="filter-item">
          <label>Sotuvchi darajasi</label>
          <ul>
            <li>Rising Talent yoki undan yuqori</li>
            <li>Eng yuqori baholangan yoki undan yuqori</li>
            <li>Yuoqri reytingli Plus</li>
          </ul>
        </div>
        <div className="filter-item">
          <label>Sotuvchi faoliyati</label>
          <ul>
            <li>Onlayn</li>
            <li>Ko'pi bilan 1 kun oldin onlayn</li>
            <li>Ko'pi bilan 3 kun oldin onlayn</li>
            <li>Ko'pi bilan 1 hafta oldin onlayn</li>
            <li>Ko'pi bilan 2 hafta oldin onlayn</li>
          </ul>
        </div>
        <div className="filter-item">
          <label>Ijobiy sharhlar</label>
          <ul>
            <li>1 yoki undan ortiq</li>
            <li>5 yoki undan ko'p</li>
            <li>20 yoki undan ko'p</li>
            <li>100 yoki undan ko'p</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
