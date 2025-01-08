import Link from "next/link"

const MPONftItem=(props)=>{
return(
<div className="col pt-3">
    <div className="auction_card_style__two">
        <div className="auction_card__thumb">

            <Link legacyBehavior  href="/category/category-section"><a><img src={props.image} alt=""/></a></Link>
            
           
        </div>
        <div className="nft__disc">
            <Link legacyBehavior  href="/category/category-section">
            <a className="nft__creator">
                {props.username} 
            <img src="/images/icons/tick-blue.svg" alt=""/>
            </a>
            </Link>

            <div className="nft__title">
                <h5><Link legacyBehavior  href="/category/category-section"><a>{props.title}</a></Link></h5>
                <ins className="current-price">
                    <img src="/images/icons/tri-flash-blue.svg" alt=""/> <span>{props.ETH} ETH</span></ins>
            </div>

            <div className="nft__bottom">
                <ul className="nft__actions d-flex">
                    <li><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0732541 11.2132L6.47058 0.254439C6.65303 -0.0648577 7.10917 -0.0876645 7.32584 0.208825L9.10477 2.59215C9.61793 3.27636 9.65217 4.20003 9.20743 4.92986L5.39865 11.0307C5.02234 11.6351 4.36096 12 3.64254 12H0.518006C0.118885 11.9886 -0.132008 11.5553 0.0732541 11.2132Z" fill="currentColor"/>
                        <path d="M10.5415 7.55271L8.35206 11.2018C8.1468 11.5439 8.39769 11.9887 8.79681 11.9887H13.1757C13.5748 11.9887 13.8257 11.5553 13.6205 11.2018L11.431 7.55271C11.2372 7.22201 10.7468 7.22201 10.5415 7.55271Z" fill="currentColor"/>
                        </svg></li>
                    <li><svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.6985 1.99765L6.99742 2.1692L7.2962 1.99743C7.50862 1.8753 7.71506 1.74828 7.92067 1.62177C8.31313 1.38029 8.70258 1.14066 9.12479 0.940522C9.75536 0.641607 10.2727 0.531212 10.6931 0.653546C13.0724 1.35159 13.8419 3.69977 13.1616 5.63257L13.1605 5.63569C12.6276 7.17674 11.1864 8.58658 9.76123 9.65606C8.42345 10.66 7.1915 11.297 6.99824 11.3948C6.80115 11.2956 5.58162 10.6685 4.25227 9.67217C2.8336 8.60887 1.38875 7.19728 0.835985 5.63289C0.154691 3.69818 0.922552 1.34972 3.29816 0.653425L3.29875 0.653253C3.73433 0.525103 4.24488 0.633423 4.86272 0.928388C5.27058 1.1231 5.64246 1.35367 6.02504 1.59088C6.24316 1.72612 6.46476 1.86351 6.6985 1.99765Z" stroke="currentColor" strokeWidth="1.2"/>
                        </svg> <span>3</span>
                        </li>
                </ul>
            </div>
        </div>
        
    </div>
</div>
)
}
export default MPONftItem