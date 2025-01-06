import Link from "next/link";
import FooterConstant from "../../../constant/Footer/FooterConstant";

const FooterOne = (props) => {
  return (
    <div
      className={`footer_style__one ${
        !props.white ? "varient-2" : ""
      } bg-body ${props.borderTop ? "has-stork" : ""} section_gap_y_top__1`}
    >
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3">
            <div className="footer__about">
              <div className="footer__logo">
                <Link legacyBehavior href="/">
                  <a className="for-dark">
                    <img
                      src={
                        "https://soffcrm.uz/_next/image?url=%2Fassets%2Fimages%2Flogo.jpg&w=256&q=75"
                      }
                      alt=""
                    />
                  </a>
                </Link>
                <Link legacyBehavior href="/">
                  <a className="for-light">
                    <img
                      src={
                        "https://soffcrm.uz/_next/image?url=%2Fassets%2Fimages%2Flogo.jpg&w=256&q=75"
                      }
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <p>{FooterConstant.Info}</p>
              <h5>Til</h5>
              <div
                className={`languege__dropdown ${
                  !props.white ? "varient-2" : ""
                }`}
              >
                <button>
                  <img src="/images/icons/flag-us.png" alt="" /> Ingliz tili
                </button>
                <ul className="languege__list">
                  <li>
                    <a>
                      {" "}
                      <img src="/images/icons/flag-us.png" alt="" /> Ingliz tili
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <img src="/images/icons/flag-us.png" alt="" /> Ingliz tili
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 d-flex justify-content-lg-center">
            <div className="footer__widget">
              <h6 className="footer_widget__title">Bozor joyi</h6>

              <ul className="footer_widget__links">
                <li>
                  <Link legacyBehavior href="/author-profile">
                    <a>Profil</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/marketplace-1">
                    <a>Bozor</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/creators">
                    <a>Yaratuvchilar</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/activity">
                    <a>Faoliyat</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/collection">
                    <a>To‘plamlar</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-6 d-flex justify-content-lg-center ">
            <div className="footer__widget">
              <h6 className="footer_widget__title">Kompaniya</h6>

              <ul className="footer_widget__links">
                <li>
                  <Link legacyBehavior href="/create-single-nft">
                    <a>Yuklash</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/connect-wallet">
                    <a>Hamyon ulash</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog">
                    <a>Blogimiz</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/nft-detail">
                    <a>Element tafsilotlari</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/contact">
                    <a>Biz bilan bog‘laning</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer__widget newslatter__widget">
              <h6 className="footer_widget__title">Yangiliklarga obuna bo‘ling</h6>
              <form action="#" method="POST" id="footer_form__one">
                <div
                  className={`footer_newslatter__one mt-2 ${
                    props.white ? "style__two" : ""
                  }`}
                >
                  <input type="text" placeholder="Email manzilingiz" />
                  <button
                    type="submit"
                    className="form__submit submit-btn-one btn-rounded-v1"
                  >
                    Obuna bo‘lish
                  </button>
                </div>
              </form>

              <ul
                className={`footer_social__links d-flex ${
                  props.white ? "style__two" : ""
                }`}
              >
                <li>
                  <Link
                    legacyBehavior
                    href={FooterConstant.SocialLinks.twitter}
                  >
                    <a>
                      <i className="bi bi-twitter"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    legacyBehavior
                    href={FooterConstant.SocialLinks.instagram}
                  >
                    <a>
                      <i className="bi bi-instagram"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    legacyBehavior
                    href={FooterConstant.SocialLinks.youtube}
                  >
                    <a>
                      <i className="bi bi-youtube"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    legacyBehavior
                    href={FooterConstant.SocialLinks.github}
                  >
                    <a>
                      <i className="bi bi-github"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    legacyBehavior
                    href={FooterConstant.SocialLinks.discord}
                  >
                    <a>
                      <i className="bi bi-discord"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row footer__copyright">
          <div className="col-lg-12">
            <p className="text-center">
              Copyright©2022. Muhabbat bilan yaratilgan <a>wprealizer</a>
              tomonidan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterOne;
