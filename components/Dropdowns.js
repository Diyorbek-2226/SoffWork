import Link from "next/link"
import { useState , useRef } from "react"



const Dropdownns=()=>{
const [StatusBar,setStatusBar] = useState(true)
const [PriceBar,setPriceBar] = useState(true)
const [CollectionBar,setCollectionBar] = useState(true)
const [CategoriesBar,setCategoriesBar] = useState(true)

const [StatusFilter,setStatusFilter] = useState(true)
const [PriceFilter,setPriceFilter] = useState(true)
const [CollectionFilter,setCollectionFilter] = useState(true)
const [CategoryFilter,setCategoryFilter] = useState(true)

return(
<div className="row ">

<div className="accordion-item sidebar_collections__filter sidebar__filter col-4  ">
<h2 
onClick={e=>CollectionFilter?setCollectionFilter(false):setCollectionFilter(true)}
className="accordion-header sidebar__header" id="filterHeadingThree">
    <button className={`accordion-button ${CollectionFilter?'active':''}`} type="button" data-bs-toggle="collapse" data-bs-target="#filter-collapseThree" aria-expanded="true" aria-controls="filter-collapseThree">
$ 40 Premium
    </button>
</h2>
<div id="filter-collapseThree" className={`according_collapse ${CollectionFilter?'show':''}`}>
<div className="accordion-body sidebar__body ">
        <ul>
            <li className="single__col text-center">
            <label>
                <span className="col__right ">
                    <ins className="col__name">15 kunda yetkazib berish  </ins> 
                </span>
           
                
            </label>
            </li>
            <li className="single__col text-center">
            <label>
                <span className="col__right">
                        <span className="cate_icon">
                       
                        </span>
                        <ins className="col__name"> Cheksiz o'zgartirish  </ins>
                </span>
                
                
            </label>
            </li>
            <li className="single__col text-center">
            <label>
                <span className="col__right">
                      
                    <ins className="col__name">Musicswdesfg</ins>
                </span>
                
                
            </label>
            </li>
            <li className="single__col text-center">
            <label>
                <span className="col__right">
    
                    <ins className="col__name">Collectiblesqswdefrgth</ins>
                </span>
                
                
            </label>
            </li>
            <li className="single__col text-center">
            <label>
                <span className="col__right">
                    <ins className="col__name">Sportssasdfghjhgfdsfdgh</ins>
                </span>
                
                
            </label>
            <div className="more-load-wrap    mt-50 d-flex align-items-center justify-content-center gap-4">
              <Link legacyBehavior href="/">
                <a className="load-more-btn varient-2">
                  <svg width="18" height="19" fill="none" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.775 3.61794C11.0224 3.39694 10.192 3.25244 9.27502 3.25244C5.13143 3.25244 1.77502 6.55046 1.77502 10.622C1.77502 14.702 5.13143 18 9.27502 18C13.4186 18 16.775 14.702 16.775 10.6305C16.775 9.11747 16.3079 7.70646 15.512 6.53346" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12.848 3.82201L10.348 1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12.8478 3.82202L9.93256 5.91303" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  Xizmat narxi $20
                </a>
            
              </Link>
            </div>
            
            </li>
        </ul>

        
    </div>
</div>
</div>

<div className="accordion-item sidebar_collections__filter sidebar__filter  ">
<h2 
onClick={e=>CategoryFilter?setCategoryFilter(false):setCategoryFilter(true)}
className="accordion-header sidebar__header" id="filterHeadingFour">
    <button className={`accordion-button  ${CategoryFilter?'active':''} `} type="button">
    $20 Assosiy
    </button>
</h2>
<div id="filter-collapseFour" className={`according_collapse ${CategoryFilter?'show':''}`}>
    <div className="accordion-body sidebar__body ">
        <ul>
            <li className="single__col text-center">
            <label>
                <span className="col__right ">
                    <ins className="col__name">15 kunda yetkazib berish  </ins> 
                </span>
           
                
            </label>
            </li>
            <li className="single__col text-center">
            <label>
                <span className="col__right">
                        <span className="cate_icon">
                       
                        </span>
                        <ins className="col__name">Cheksiz o'zgartirish  </ins>
                </span>
                
                
            </label>
            </li>
            <li className="single__col text-center">
            <label>
                <span className="col__right">
                      
                    <ins className="col__name">Musicswdesfg</ins>
                </span>
                
                
            </label>
            </li>
            <li className="single__col text-center">
            <label>
                <span className="col__right">
    
                    <ins className="col__name">Collectiblesqswdefrgth</ins>
                </span>
                
                
            </label>
            </li>
            <li className="single__col text-center">
            <label>
                <span className="col__right">
                    <ins className="col__name">Sportssasdfghjhgfdsfdgh</ins>
                </span>
                
                
            </label>
            <div className="more-load-wrap    mt-50 d-flex align-items-center justify-content-center gap-4">
              <Link legacyBehavior href="/">
                <a className="load-more-btn varient-2">
                  <svg width="18" height="19" fill="none" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.775 3.61794C11.0224 3.39694 10.192 3.25244 9.27502 3.25244C5.13143 3.25244 1.77502 6.55046 1.77502 10.622C1.77502 14.702 5.13143 18 9.27502 18C13.4186 18 16.775 14.702 16.775 10.6305C16.775 9.11747 16.3079 7.70646 15.512 6.53346" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12.848 3.82201L10.348 1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12.8478 3.82202L9.93256 5.91303" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  Xizmat narxi $20
                </a>
            
              </Link>
            </div>
            
            </li>
        </ul>

        
    </div>
</div>
</div>
</div>
)
}
export default Dropdownns