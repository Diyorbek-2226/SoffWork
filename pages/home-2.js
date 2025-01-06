
import HeaderTwo from "../components/Layout/Headers/HeaderTwo"
import FooterOne from "../components/Layout/Footers/FooterOne";
import { useRouter } from "next/router";

const HomeTwo=()=>{
    const {query}= useRouter();
    
    console.log(query);
    
return(
<>
<HeaderTwo/>

<FooterOne/>
</>
)
}
export default HomeTwo