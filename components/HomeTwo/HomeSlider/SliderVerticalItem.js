import Link from "next/link"

const SliderVerticalItem=(props)=>{
return(
<div className="swiper-slide">
    <div className="hero_thumb__slide">
        <div className="hero__thumb">
            <img src={props.image} alt=""/>
        </div>
        <div className="hero_thumb__disc">
            <span>by <Link legacyBehavior  href="/author-profile"><a> {props.by} </a></Link> 
            <img src="/images/icons/tick-blue.svg" alt=""/></span>
            <h6><Link legacyBehavior  href="/nft-detail"><a>{props.title}</a></Link></h6>
            <ins>{props.price} ETH</ins>
        </div>
        <span className="thumb_progress__bar"></span>
    </div>
</div>
)
}
export default SliderVerticalItem