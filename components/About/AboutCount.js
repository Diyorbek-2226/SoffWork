import AboutCountItem from "./AboutCount/AboutCountItem"

const AboutCount=()=>{
return(
<div className="success_counter__style bg-body-2 section_gap_y_top__3 section_gap_y_bottom__2">
<div className="container">
    <div className="counter_card__wrap d-flex flex-wrap justify-content-center align-items-center gap-3">
        <AboutCountItem
         image="/images/icons/doller-blue.svg"
         price="Soff Works"
        />
        <AboutCountItem
         image="/images/icons/flash-blue.svg"
         price="$207"
        />
        <AboutCountItem
         image="/images/icons/flash-blue.svg"
         price="462"
        />
        <AboutCountItem
         image="/images/icons/people-blue.svg"
         price="1.5000"
        />
    </div>
</div>
</div>
)
}
export default AboutCount