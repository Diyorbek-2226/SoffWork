import Countdown from 'react-countdown';
import Link from 'next/link';

const TrandingSlide=(props)=>{
return(
<div className="swiper-slide mt-5 mb-5">
    <div className="auction_card_style__one">
        
        <div className="auction_card__thumb">
            <Link legacyBehavior  href="writing-translations">
            <a>
                <img src={props.NftImage} alt=""/>
            </a>
            </Link>
        </div>
        <div className="nft__info">
            <div className="collection">
                <div className="avater">
                <img src={props.NftIcon} alt=""/>
                </div>
                <span>
                    <Link legacyBehavior  href="/collection">
                    <a>{props.name}</a>
                    </Link>
                </span>
            </div>
            <h5 className="nft__title">
                <Link legacyBehavior  href="/nft-detail"><a>{props.title}</a></Link>
            </h5>
        </div>

      
    </div>
</div>
)   
}
export default TrandingSlide