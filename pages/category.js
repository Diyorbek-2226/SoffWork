import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import BreadCrumbOne from "../components/Global/BreadCrumbOne"
import MarketPlaceOne from "../components/Marketplace/MarketpaceOne/MarketplaceOne"
import FooterOne from "../components/Layout/Footers/FooterOne"


const MarketplaceOne=()=>{
return(
<>
<HeaderTwo/>
<BreadCrumbOne
 pagename="Marketing bo'limi "
 prevPage="Bu categorya bo'yicha qilingan loyihalarni ko'rishingiz mumkin "
/>

<MarketPlaceOne />
<FooterOne white={true}/>
</>
)
}
export default MarketplaceOne