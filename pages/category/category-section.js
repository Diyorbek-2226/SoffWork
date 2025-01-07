import CreatePageBreadcrumb from "../../components/Create/CreatePageBreadcrumb"
import HeaderTwo from "../../components/Layout/Headers/HeaderTwo"
import FooterOne from "../../components/Layout/Footers/FooterOne"
import Link from "next/link"
import MultipleNftform from "../../components/Create/multiple-nft-form"
import BlogDetail from "../../components/Blog/BlogDetail"
import DomainTable from "../../components/Table"

const CreateMultipleNft=()=>{
return(
<>
<HeaderTwo/>

<MultipleNftform/>
<BlogDetail/>
<DomainTable/>
<FooterOne/>
</>
)
}
export default CreateMultipleNft