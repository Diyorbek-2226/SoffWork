import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../home.module.css';

const HTHHomeSection = (props) => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="hero_style__three section_gap_y_bottom__1 position-relative">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <div className="hero__content">
            <h5 style={{fontSize:'35px'}} className="section_title__2 mt-5 mb-5">
            Arzon freelance xizmatlarni qulay va tezkor tarzda sotib oling.</h5>

              <div className={`footer_newslatter__one mt-2 ${props.white ? 'style__two' : ''}`}>
                <input type="text" placeholder="Dizaynlarni sinab ko'ring" aria-label="Search design" />
                <button type="submit" className="form__submit submit-btn-one btn-rounded-v1" aria-label="Search">
                  Qidirish
                </button>
              </div>

              <div className="row gy-4">
                <div className="col-lg-12">
                  <ul className="filter-list d-flex flex-wrap gap-2 mt-5 mb-5">
                    {[
                      { label: "Web dizayn", path: "/category/offpageseo" },
                      { label: "Logotip dizayn", path: "/category/offpageseo" },
                      { label: "Websayt va shablonlar", path: "/category/offpageseo" },
                      { label: "WordPress", path: "/category/offpageseo" },
                    ].map((item, index) => (
                      <li key={index} onClick={() => handleNavigation(item.path)} className="single-filter mt-0">
                        <button className="has__dropdown">
                          <span>{item.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTHHomeSection;
