import Link from "next/link"

const HTHCollectionItem=(props)=>{
return(
<div className="collection_card_style__two">
    <div className="collection_card__thumb">
        <Link legacyBehavior  href="/seo"><img src={props.image} alt=""/></Link>
    </div>
    <div className="collection_card__overlay">
        <Link legacyBehavior  href="/seo">
            <a className="collection_btn">{props.title}</a>
        </Link>
    </div>
</div>
)
}
export default HTHCollectionItem