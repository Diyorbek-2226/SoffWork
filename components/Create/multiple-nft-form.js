import Link from "next/link"
import ActivityFilterItem from "../Activity/ActivityFilter/ActivityFilterItem"
import Dropdownns from "../Dropdowns"
import SectionsSidebar from "../SectionsSidebar"
import HTSellers from '../../components/HomeTwo/HTSellers'


const MultipleNftform=(props)=>{
return(
<>
<div className="item_create__wrapper bg-body-2 section_gap_y_top__3 ">
<div className="container ">
<div className="row d-flex justify-content-between ">
 <div className="col-lg-5 col-md-7 col-sm-10 ">
<div className="create__preview">
   <div className="ps-5 pe-5">
   <h5>Veb-saytingizni reklama qilish va Google Rank uchun 5000 ta ijtimoiy signallarni aralashtiramiz</h5>
   </div>
    
    <div className="preview_card__style ">
        <div className="preview__cover ">
                <img className="w-100" src="/images/others/preview-thumb2.png" alt=""/>  
        </div>
        <div className="preview__disc ps-4 pe-5">
            <span className="seller">Desmond Eagle</span>
            <div className="preview__title">
                <h5 className="pb-0">Abstract Painting</h5>
                <ins className="current-price">
                    <img src="/images/icons/tri-flash-blue.svg" alt=""/>
                    <span>0.01 ETH</span></ins>
            </div>
        </div>
        <div className="preview__bottom pe-5 ps-5">
            <ul className="preview__actions d-flex">
                <li><svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.0732541 11.2132L6.47058 0.254439C6.65303 -0.0648577 7.10917 -0.0876645 7.32584 0.208825L9.10477 2.59215C9.61793 3.27636 9.65217 4.20003 9.20743 4.92986L5.39865 11.0307C5.02234 11.6351 4.36096 12 3.64254 12H0.518006C0.118885 11.9886 -0.132008 11.5553 0.0732541 11.2132Z"
                            fill="currentColor"></path>
                        <path
                            d="M10.5415 7.55271L8.35206 11.2018C8.1468 11.5439 8.39769 11.9887 8.79681 11.9887H13.1757C13.5748 11.9887 13.8257 11.5553 13.6205 11.2018L11.431 7.55271C11.2372 7.22201 10.7468 7.22201 10.5415 7.55271Z"
                            fill="currentColor"></path>
                    </svg></li>
                <li><svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.6985 1.99765L6.99742 2.1692L7.2962 1.99743C7.50862 1.8753 7.71506 1.74828 7.92067 1.62177C8.31313 1.38029 8.70258 1.14066 9.12479 0.940522C9.75536 0.641607 10.2727 0.531212 10.6931 0.653546C13.0724 1.35159 13.8419 3.69977 13.1616 5.63257L13.1605 5.63569C12.6276 7.17674 11.1864 8.58658 9.76123 9.65606C8.42345 10.66 7.1915 11.297 6.99824 11.3948C6.80115 11.2956 5.58162 10.6685 4.25227 9.67217C2.8336 8.60887 1.38875 7.19728 0.835985 5.63289C0.154691 3.69818 0.922552 1.34972 3.29816 0.653425L3.29875 0.653253C3.73433 0.525103 4.24488 0.633423 4.86272 0.928388C5.27058 1.1231 5.64246 1.35367 6.02504 1.59088C6.24316 1.72612 6.46476 1.86351 6.6985 1.99765Z"
                            stroke="currentColor" strokeWidth="1.2"></path>
                    </svg> <span>3</span>
                </li>
            </ul>

            <ins className="preview__countdown">Ends in <span>11:21:36</span></ins>
        </div>
    </div>
   
</div>

</div>


<div className="col-lg-7 col-md-10 gx-lg-5 ">
        <div className="tab-content" id="act_tab_content">
        <Dropdownns/>
            <div className="tab-pane fade act_tab all show active">
               
                 <ActivityFilterItem
                  title="Pulni qaytarish kafolati"
                  action="Biz ajoyib buyurtma tajribasini  yoki pulingizni qaytarib berishni va'da qilamiz."
                  username="@Desmond Eagle"
                  image="/images/nft/nf-sm-two.png"
                  icon="/images/icons/status-tick-x.svg"
                  time="3 hours ago"
                />
                <SectionsSidebar/>
       
             
            </div>
        </div>
        
    </div></div>
    <HTSellers/>
</div>
</div>
</>
)
}
export default MultipleNftform