import { useContext , useState , useRef } from "react"
import ThemeContext from "../../../context/Theme/ThemeContext"
import Link from "next/link"
import HeaderConstant from "../../../constant/Header/HeaderConstant"
import { useIsVisible } from "react-is-visible"

const HeaderTwo=()=>{
const { DarkTheme , setDarkTheme } = useContext(ThemeContext)
const [MobileMenu,setMobilemenu] = useState(false)
const [MobileSearch,setMobilesearch] = useState(false)

const navRef = useRef(null)
const isVisible = useIsVisible(navRef)

function ToggleTheme(){
try{
    if(DarkTheme){
        setDarkTheme(false)
        localStorage.setItem('theme','light')
    }else{
        setDarkTheme(true)
        localStorage.setItem('theme','dark')
    }
}catch(err){}
}

// toggle sub menu
function ToggleSubMenu(e){
    try{
    let togller = e.target
    togller.innerHTML==="+"?togller.innerHTML="-":togller.innerHTML="+"
    let next_el = togller.nextSibling
    next_el.style.height===next_el.getAttribute("data-height")?next_el.style.height="0px":next_el.style.height=next_el.getAttribute("data-height")
    }catch(err){}
}

return(
<>
<div className={`mobil__searchbar ${MobileSearch?'active-search':''} `} id="mobilSearch">
<div className="input__wrapper">
<div className="container">
    <div className="row">
        <div className="col-lg-6">
            <div className="pb-3 d-flex align-items-center justify-content-between"><h5>What are you looking for?</h5> <span className="close__search" id="closeSearch" onClick={e=>setMobilesearch(false)}>Close Popup</span></div>
            <form action="#">
                <div className="d-flex">
                    <input type="text" placeholder="Find services "/>
                    <button className="submit-v1 ml-2">Qidiruv</button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
</div>

<header ref={navRef}>
<div className={`header-area header-defult header_style__two bg-body ${isVisible?'':'sticky'} `}>
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-xl-4 col-2 col-lg-3 col-md-2 col-2 align-items-center d-flex order-0">
                <div className="nav-logo logo-switch d-flex justify-content-between align-items-center">
                    <Link legacyBehavior href="/">
                    <a className="logo-dark">
                        <img src={'https://soffcrm.uz/_next/image?url=%2Fassets%2Fimages%2Flogo.jpg&w=256&q=75'} alt="logo"/>
                    </a>
                    </Link>
                    <Link legacyBehavior href="/">
                    <a className="logo-light">
                        <img src={'https://soffcrm.uz/_next/image?url=%2Fassets%2Fimages%2Flogo.jpg&w=256&q=75'} alt="logo"/></a>
                    </Link>
                </div>
                <div className="nav-search-style-two w-100 d-xl-block d-none">
                    <span className="search__icon">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.26847 16.0378C12.2827 16.0378 15.5369 12.7834 15.5369 8.7689C15.5369 4.7544 12.2827 1.5 8.26847 1.5C4.2542 1.5 1 4.7544 1 8.7689C1 12.7834 4.2542 16.0378 8.26847 16.0378Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.0002 17.5L13.4023 13.9025" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                    </span>
                    <input type="text" 
                    placeholder={'Bizning xizmatlar '}/>
                </div>
            </div>
            <div className="col-xl-8 col-10 col-lg-9 d-flex justify-content-end">
                <nav className={`main-nav mr-2 ${MobileMenu?'slidenav':''} `}>
                    <div className="inner-logo d-xl-none text-center pt-4">
                        <Link legacyBehavior href="/">
                        <a className="for-dark">
                            <img src="/images/logo.png" alt=""/>
                         </a>
                         </Link>
                        <Link legacyBehavior href="/">
                        <a className="for-light">
                            <img src="/images/logo-v2.png" alt=""/>
                        </a>
                        </Link>
                    </div>
                    <ul>
                        <li className="has-child-menu">
                            <a>Home</a>
                            <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                            <ul className="sub-menu sub_menu_show"
                            data-height="120px"
                            >
                                <li>
                                    <Link legacyBehavior href="/">
                                       <a>Home Style - 01</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/home-2">
                                        <a>Home Style - 02</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/home-3">
                                        <a>Home Style - 03</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="has-child-menu">
                            <a>Explore</a>
                            <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                            <ul className="sub-menu sub_menu_show"
                             data-height="150px"
                            >
                                <li>
                                    <Link legacyBehavior href="/marketplace-1">
                                    <a>Marketplace - 1</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/marketplace-2">
                                    <a>Marketplace - 2</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/live-auction">
                                    <a>Live Auction</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/collection">
                                    <a>Collection</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="has-child-menu">
                            <a>Pages</a>
                            <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                            <ul className="sub-menu sub_menu_show"
                            data-height="330px"
                            >
                                <li>
                                    <Link legacyBehavior href="/about">
                                    <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/live-auction">
                                    <a>Live Auction</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/collection">
                                        <a>Collection</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/activity">
                                        <a>Activity</a>
                                    </Link>    
                                </li>
                                <li>
                                    <Link legacyBehavior href="/connect-wallet">
                                    <a>Connect Wallet</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/nft-detail"> 
                                    <a>NFT Details</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/author-profile">
                                    <a>Author Profile</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/login">
                                    <a>Login</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/register">
                                    <a>Register</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="has-child-menu">
                            <a>Create</a>
                            <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                            <ul className="sub-menu sub_menu_show"
                             data-height="150px"
                            >
                                <li>
                                   <Link legacyBehavior href="/create-nft">
                                       <a>Create NFT</a>
                                    </Link>   
                                </li>
                                <li>
                                    <Link legacyBehavior href="/create-multiple-nft">
                                    <a>Create NFT (Maltiple)</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/create-single-nft">
                                    <a>Create NFT (Single)</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/creators">
                                    <a>Creators</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="has-child-menu">
                            <a>Blog</a>
                            <i className="fl flaticon-plus" onClick={ToggleSubMenu}>+</i>
                            <ul className="sub-menu sub_menu_show"
                             data-height="80px"
                            >
                                <li>
                                <Link legacyBehavior href="/blog">
                                <a>Blog Grid</a>
                                </Link>
                                </li>
                                <li>
                                    <Link legacyBehavior href="/blog-details">
                                    <a>Blog Details</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link legacyBehavior href="/contact">
                            <a>Contact</a>
                            </Link>
                        </li>

                    </ul>

                    <div className="d-xl-none d-inline-flex flex-column gap-3 px-3 mt-4">
                        <Link legacyBehavior  href="/connect-wallet">
                        <a className="btn-pill-v1"><span>Hamyonlar </span></a>
                        </Link>
                    </div>
                </nav>

                <div className="nav-actions d-flex align-items-center">
                    
                    <div className="d-none d-md-block mr-2">
                        <Link legacyBehavior  href="/connect-wallet">
                        <a className="btn-pill-v1"><span> hamyoni ulash </span></a>
                        </Link>
                    </div>
                    <button 
                    onClick={e=>MobileSearch?setMobilesearch(false):setMobilesearch(true)}
                    type="button" className="nav_search__icon mr-2 d-block d-xl-none mr-2 style__two" id="navSearch">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.26847 16.0378C12.2827 16.0378 15.5369 12.7834 15.5369 8.7689C15.5369 4.7544 12.2827 1.5 8.26847 1.5C4.2542 1.5 1 4.7544 1 8.7689C1 12.7834 4.2542 16.0378 8.26847 16.0378Z"
                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round"></path>
                            <path d="M17.0002 17.5L13.4023 13.9025" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <label className="theme-switch-one style__two">
                        <input type="checkbox" id="slider" className="slider-light check-status"/>
                        <span className="slider round" onClick={ToggleTheme}></span>
                    </label>
                    
                    <div className="d-flex align-items-center gap-4 ml-2">
                        <div className="mobile-menu d-flex ">
                            <div className={`hamburger d-block d-xl-none ${MobileMenu?'h-active':''}`}
                            onClick={e=>MobileMenu?setMobilemenu(false):setMobilemenu(true)}
                            >
                                <span className="h-top"></span>
                                <span className="h-middle"></span>
                                <span className="h-bottom"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</header>
</>
)
}

export default HeaderTwo