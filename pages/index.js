import HomeMarketplaceGrid from "../components/Home/HomeMarketplaceGrid";
import HomeSeller from "../components/Home/HomeSeller";
import HomeSlider from "../components/Home/HomeSlider";
import HomeTranding from "../components/Home/HomeTranding";
import FooterOne from "../components/Layout/Footers/FooterOne";
import HeaderOne from "../components/Layout/Headers/HeaderOne";
import HomeCollections from "../components/Home/HomeCollections"
import HomeFeature from "../components/Home/HomeFeature";
import HomeTwoSlider from "../components/HomeTwo/HomeTwoSlider";
import Services from "../components/Service/Services";
import HeaderThree from "../components/Layout/Headers/HeaderThree";
import HTHHomeSection from "../components/HomeThree/HTHomeSection";
import HeaderTwo from "../components/Layout/Headers/HeaderTwo";
import HeaderNav from "../components/Layout/Headers/HeaderNav";
import Brands from "../components/Brands/Brands";
import AboutCount from "../components/About/AboutCount";
import HTHCollection from "../components/HomeThree/HTHCollection";
import AboutCrew from "../components/About/AboutCrew";
import AboutClientLogos from "../components/About/AboutClientLogos";


export default function Home() {
return (
<>
<HeaderTwo/>
<HTHHomeSection/>
<AboutClientLogos/>
<HTHCollection/>

{/* <HomeTranding/>
<HomeSeller/>
<HomeMarketplaceGrid/>
<HomeCollections/>
<HomeFeature/> */}
<FooterOne/>
</>  
)
}
