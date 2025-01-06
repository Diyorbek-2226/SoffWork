import Link from "next/link";
import { useState } from "react";

const ActivityFilterItem = (props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="activity_card__style my-3 ">
        <div className="activity__left">
          <div className="activity__avater">
            <img src={props.image} alt="" />
          </div>
          <div className="activity_card__disc">
            <h5 className="nft__title">
              <Link legacyBehavior href="/">
                <a>{props.title}</a>
              </Link>
            </h5>
            <p className="d-block">{props.action}</p>
               <p className="dropdown-toggle nft__title"  onClick={toggleDropdown}>
               Bu qanday ishlaydi?
               </p>
          </div>
        </div>
      </div>
      {/* Dropdown tarkibi */}
      {isDropdownOpen && (
        <div className="activity_card__style mt-3">
          <div className="activity_card__disc ">
            <h4>
            Agar siz qoniqmasangiz, biz ham qoniqmadik.
             Shuning uchun sizda pulingiz o'zgarishidan oldin sotuvchining
              yetkazib berishini ko'rib chiqish va tasdiqlash imkoniyati mavjud.
            </h4>
            <h4 style={{fontSize:'24px',textAlign:'center' , margin:'10px 0px'}}>
            Siz pulingizni qaytarib olasiz
            </h4 >
            
            <h4>
           1.  Agar siz buyurtma berganingizdan keyin 20 daqiqa ichida bekor qilsangiz, darholn
            </h4>
            <h4>
           2.  Agar sotuvchi belgilangan muddatni o'tkazib yuborsa va siz buyurtmani bekor qilishni tanlasangiz, darhol
            </h4>
            <h4>
                3. agar xaridor va sotuvchi o'zaro kelishuvni bekor qilishga rozi bo'lsa, darhol
            </h4>
            <h4>
                4. within several hours if the order is completed poorly or incomplete.
            </h4>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivityFilterItem;
