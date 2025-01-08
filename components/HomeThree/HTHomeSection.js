import Link from "next/link"
import '../home.module.css'
import { useRouter } from "next/router"

const HTHHomeSection=(props)=>{
    const routes=useRouter()
return(
<div className="hero_style__three section_gap_y_bottom__1 position-relative">

<div className="container">
    <div className="row align-items-center gy-4">
        <div className="col-lg-7 ">
            <div className="hero__content">
                <h5 style={{fontSize:'35px'}} className="section_title__2 mt-5 mb-5">
                Arzon freelance xizmatlarni qulay va tezkor tarzda sotib oling.</h5>
<form action="#" method="POST" id="footer_form__one">
                <div className={`footer_newslatter__one mt-2 ${props.white?'style__two':''}`}>
                    <input type="text" placeholder="Dizaynlarni sinab ko'ring"/>
                    <button type="submit"
                        className="form__submit submit-btn-one btn-rounded-v1">Qidirish</button>
                </div>
                <div className="row gy-4">
               
               <div className="col-lg-12   ">
               <ul className="filter-list d-flex flex-wrap gap-2 mt-5 mb-5">
                   <li onClick={()=>router.push('/seo')}  className="single-filter mt-0">
                       <button 
                       
                       className="has__dropdown">  <span>Web dizayn </span>
                       </button>
               
                   </li>
                   <li onClick={()=>router.push('/seo')}  className="single-filter mt-0">
                       <button className="has__dropdown">
                       
                       <span>Logotip dizayn</span></button>
               
                          
                   </li>
                   <li onClick={()=>router.push('/seo')}  className="single-filter mt-0">
                       <button className="has__dropdown">  <span>Websayt va shablonlar</span></button>
                          
                   </li>
                   <li onClick={()=>router.push('/seo')}  className="single-filter mt-0">
                       <button className="has__dropdown"
                      > <span>Wordpres</span></button>
               
                          
                   </li>
                 
                   
                   
               </ul>
               </div>
               
               
               </div>
            </form>
               
               
            </div>
        </div>
       
        
    </div>
</div>
</div>
)
}
export default HTHHomeSection