import Link from "next/link"

const AuctionGridItem=(props)=>{
return(
<>
<div className="col pt-lg-0 pt-3">
    <div className="auction_card_style__two">
        <div className="auction_card__thumb">
            <Link legacyBehavior  href="/category">
            <a>
                <img src={props.image} alt=""/>
            </a>
            </Link>

            <a className="bid__btn">
                  Seo trafic
            </a>
        </div>   
    </div>
</div>
</>
)
}
export default AuctionGridItem