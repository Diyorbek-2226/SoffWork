import HTSellerItem from "./HomeSeller/HTSellerItem"
import Link from "next/link"

const HTSellers=()=>{
return(
<div className="stats_grid__style bg-body-2 section_gap_y_top__3 section_gap_y_bottom__3 overflow-hidden">
<div className="container">
<div className="row gx-6 gy-4">
    <div className="col-lg-4 starts__row position-relative">
        <div className="d-flex align-items-center justify-content-center">
            <h4 className="fw-sami-bold sub-header-1">$20 oddiy tarif</h4>
            
        </div>
        <div className="row pt-30">
        <hr className="seller-names"/>
            <HTSellerItem
              username="SkuxxVerse"
             
            />
            
<hr className="seller-names"/>
            <HTSellerItem
              username="Oasis Doodles"
              
            /> 
            <hr className="seller-names"/>

            <HTSellerItem
              username="CatBloxGenesis"
            
            />
            <hr className="seller-names"/>

            <HTSellerItem
              username="Tsuki Genesis"
              
            />
<hr className="seller-names"/>
            <HTSellerItem
              username="Rat Pack Mafia"
             
            />
            <hr className="seller-names"/>
        </div>
    </div>
    <div className="col-lg-4 starts__row position-relative">
        <div className="d-flex align-items-center justify-content-center">
            <h4 className="fw-sami-bold sub-header-1">$40 orta tarif</h4>
           
        </div>
        <div className="row pt-30">
        <hr className="seller-names"/>
            <HTSellerItem
              username="SkuxxVerse"
              avatar="/images/stars/avater-vi.png"
              price="$3,256,246"
            />
            <hr className="seller-names"/>

            <HTSellerItem
              username="Oasis Doodles"
              avatar="/images/stars/avater-vii.png"
              price="$3,256,246"
            />
            <hr className="seller-names"/>

            <HTSellerItem
              username="CatBloxGenesis"
              avatar="/images/stars/avater-viii.png"
              price="$3,256,246"
            />
            <hr className="seller-names"/>

            <HTSellerItem
              username="Tsuki Genesis"
              avatar="/images/stars/avater-ix.png"
              price="$3,256,246"
            />

<hr className="seller-names"/>

            <HTSellerItem
              username="Rat Pack Mafia"
              avatar="/images/stars/avater-x.png"
              price="$3,256,246"
            />
            <hr className="seller-names"/>

        </div>
    </div>
    <div className="col-lg-4 starts__row position-relative">
        <div className="d-flex align-items-center justify-content-center">
            <h4 className="fw-sami-bold sub-header-1 ">$60  premium tarif</h4>
            
        </div>
        <div className="row pt-30">
        <hr className="seller-names"/>
            <HTSellerItem
              username="SkuxxVerse"
              avatar="/images/stars/avater-i.png"
              price="$3,256,246"
            />
            <hr className="seller-names"/>

            <HTSellerItem
              username="Oasis Doodles"
              avatar="/images/stars/avater-ii.png"
              price="$3,256,246"
            />
            <hr className="seller-names"/>

            <HTSellerItem
              username="CatBloxGenesis"
              avatar="/images/stars/avater-ii.png"
              price="$3,256,246"
            />
            <hr className="seller-names"/>

            <HTSellerItem
              username="Tsuki Genesis"
              avatar="/images/stars/avater-iv.png"
              price="$3,256,246"
            />
            <hr className="seller-names"/>

            <HTSellerItem
              username="Rat Pack Mafia"
              avatar="/images/stars/avater-v.png"
              price="$3,256,246"
            />
            <hr className="seller-names"/>

        </div>
    </div>
</div>
</div>
</div>
)
}
export default HTSellers