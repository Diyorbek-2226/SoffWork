
import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import FooterOne from "../components/Layout/Footers/FooterOne";
import { useRouter } from "next/router";
import HTCollections from "../components/HomeTwo/HTCollections"

const HomeTwo=()=>{
    const {query}= useRouter();
    
    console.log(query);
    
return(
<>
<HeaderTwo/>
<HTCollections/>

<FooterOne/>
</>
)
}
export default HomeTwo