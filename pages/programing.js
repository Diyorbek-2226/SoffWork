import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import BreadCrumbOne from "../components/Global/BreadCrumbOne"
import MPOHeader from "../components/Marketplace/MarketpaceOne/MPOHeader"
import MPOSidebar from "../components/Marketplace/MarketpaceOne/MPOSidebar"
import AuctionGridItem from "../components/Marketplace/Auction/AuctionGridItem"
import FooterOne from "../components/Layout/Footers/FooterOne"
import AupSidebar from "../components/AuthorProfile/AupSidebar"
import BlogSidebar from "../components/Blog/BlogSidebar"

const LiveAuction=()=>{
return(
<>
<HeaderTwo/>
<BreadCrumbOne
 pagename="Raqamli marketing va Smm sohasi"
 prevPage="Agar sizda Soff work bo'lsa, yangi mijozlar har doim mavsumda bo'ladi."
/>

<div className="marketplace_style_one bg-body-2 section_gap_y_bottom__1 ">
<div className="container">


<div className="row  gy-4">

<div className="col-lg-3">
<BlogSidebar/>
</div>


<div className="col-lg-9">
<div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">
    
<AuctionGridItem
 image="/images/nft/auction-one.png"
 
/>

<AuctionGridItem
 image="/images/nft/auction-two.png"
 
/>

<AuctionGridItem
 image="/images/nft/auction-three.png"
 
/>

<AuctionGridItem
 image="/images/nft/auction-four.png"
 
/>

<AuctionGridItem
 image="/images/nft/auction-five.png"
 
/>

<AuctionGridItem
 image="/images/nft/auction-six.png"
 
/>
</div>
</div>
</div>
</div>
</div>

<FooterOne borderTop={true}/>
</>
)
}
export default LiveAuction