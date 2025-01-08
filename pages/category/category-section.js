import CreatePageBreadcrumb from "../../components/Create/CreatePageBreadcrumb"
import HeaderTwo from "../../components/Layout/Headers/HeaderTwo"
import FooterOne from "../../components/Layout/Footers/FooterOne"
import Link from "next/link"
import MultipleNftform from "../../components/Create/multiple-nft-form"
import BlogDetail from "../../components/Blog/BlogDetail"
import DomainTable from "../../components/Table"
import Number from "../../components/Number"
import HomeCollections from '../../components/Home/HomeCollections'
import HomeCollectionSlide from "../../components/Home/HomeCollection/HomeCollectionSlide"


const CreateMultipleNft=()=>{
return(
<>
<HeaderTwo/>

<MultipleNftform/>
<BlogDetail/>
<DomainTable/>
<div className="">
<HomeCollections/>
<HomeCollections/>
</div>
<FooterOne/>
</>
)
}
export default CreateMultipleNft