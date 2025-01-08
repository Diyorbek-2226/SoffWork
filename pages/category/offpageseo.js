import BreadCrumbOne from "../../components/Global/BreadCrumbOne"
import FooterOne from "../../components/Layout/Footers/FooterOne"
import HeaderTwo from "../../components/Layout/Headers/HeaderTwo"
import MarketPlaceOne from "../../components/Marketplace/MarketpaceOne/MarketplaceOne"


const MarketplaceOne=()=>{
return(
<>
<HeaderTwo/>
<BreadCrumbOne
 pagename="Marketplace"
 prevPage="Home"
/>
<MarketPlaceOne />
<FooterOne white={true}/>
</>
)
}
export default MarketplaceOne