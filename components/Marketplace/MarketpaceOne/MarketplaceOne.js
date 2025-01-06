import MarketplaceTwoHeader from "../MarketplaceTwo/MPTTwoHeader"
import MPOHeader from "./MPOHeader"
import MPONftItem from "./MPONftITem"
import MPOSidebar from "./MPOSidebar"
import Link from "next/link"

const MarketPlaceOne = (props) => {
  return (
    <div className="marketplace_style_one bg-body-2 section_gap_y_bottom__1 ">
      <div className="container">

        <form action="#" method="POST" id="footer_form__one">
          <div className="row gy-4">
            <div className="col-lg-12">
              <ul className="filter-list d-flex flex-wrap gap-2 mt-5 mb-5">
                <li className="single-filter mt-0">
                  <button className="has__dropdown">
                    <span>Veb dizayn</span>
                  </button>
                </li>
                <li className="single-filter mt-0">
                  <button className="has__dropdown">
                    <span>Veb dasturchi</span>
                  </button>
                </li>
                <li className="single-filter mt-0">
                  <button className="has__dropdown">
                    <span>Veb saytlar va shablonlar</span>
                  </button>
                </li>
                <li className="single-filter mt-0">
                  <button className="has__dropdown">
                    <span>WordPress</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </form>

        <div className="row pt-40 gy-4">
          <MPOSidebar />

          <div className="col-lg-9">
            <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">
              <MPONftItem
                image="/images/nft/auction-one.png"
                username="100 ta PBN doimiy orqa havolalar qurish - Yuqori sifatli domen havolalari HIGH DA 50+"
                title="Boshlanish narxi"
                ETH="$30"
              />

              <MPONftItem
                image="/images/nft/auction-one.png"
                username="100 ta PBN doimiy orqa havolalar qurish - Yuqori sifatli domen havolalari HIGH DA 50+"
                title="Boshlanish narxi"
                ETH="$30"
              />

              <MPONftItem
                image="/images/nft/auction-one.png"
                username="100 ta PBN doimiy orqa havolalar qurish - Yuqori sifatli domen havolalari HIGH DA 50+"
                title="Boshlanish narxi"
                ETH="$30"
              />

              <MPONftItem
                image="/images/nft/auction-one.png"
                username="100 ta PBN doimiy orqa havolalar qurish - Yuqori sifatli domen havolalari HIGH DA 50+"
                title="Boshlanish narxi"
                ETH="$30"
              />

              <MPONftItem
                image="/images/nft/auction-one.png"
                username="100 ta PBN doimiy orqa havolalar qurish - Yuqori sifatli domen havolalari HIGH DA 50+"
                title="Boshlanish narxi"
                ETH="$30"
              />

              <MPONftItem
                image="/images/nft/auction-one.png"
                username="100 ta PBN doimiy orqa havolalar qurish - Yuqori sifatli domen havolalari HIGH DA 50+"
                title="Boshlanish narxi"
                ETH="$30"
              />

              <MPONftItem
                image="/images/nft/auction-one.png"
                username="100 ta PBN doimiy orqa havolalar qurish - Yuqori sifatli domen havolalari HIGH DA 50+"
                title="Boshlanish narxi"
                ETH="$30"
              />

              <MPONftItem
                image="/images/nft/auction-one.png"
                username="100 ta PBN doimiy orqa havolalar qurish - Yuqori sifatli domen havolalari HIGH DA 50+"
                title="Boshlanish narxi"
                ETH="$30"
              />

            </div>

            <div className="more-load-wrap text-center mt-50">
              <Link legacyBehavior href="/">
                <a className="load-more-btn varient-2">
                  <svg width="18" height="19" fill="none" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.775 3.61794C11.0224 3.39694 10.192 3.25244 9.27502 3.25244C5.13143 3.25244 1.77502 6.55046 1.77502 10.622C1.77502 14.702 5.13143 18 9.27502 18C13.4186 18 16.775 14.702 16.775 10.6305C16.775 9.11747 16.3079 7.70646 15.512 6.53346" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12.848 3.82201L10.348 1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12.8478 3.82202L9.93256 5.91303" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  Ko'proq ko'rsatish
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MarketPlaceOne
