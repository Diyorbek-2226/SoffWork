
import Link from "next/link"

const SectionsSidebar=(props)=>{
return(
<>
<div className="activity_card__style my-3 ">
        <div className="activity__left ">
          <div className="activity__avater">
            <img src={'https://picsum.photos/200'} alt="" />
          </div>
          <div><div className="activity_card__disc">
          <h5 className="nft__title mt-2 mb-2">
              <Link legacyBehavior href="/">
                <a style={{fontSize:'13px'}}>AGC_user</a>
              </Link>
            </h5>
            <h5 className="nft__title">
              <Link legacyBehavior href="/">
                <a>AGC</a>
              </Link>
            </h5>
            <p className="d-block">{'props.action'}</p>
          </div>
          <div className="activity_card__disc mt-3 mb-3">
            <button className="nft__title btn border rounded-pill d-flex align-items-center px-3 py-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" viewBox="0 0 16 16" className="me-2">
    <path fill-rule="evenodd" d="M1.5 8a.5.5 0 0 1 .5-.5h9.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L11.793 8.5H2a.5.5 0 0 1-.5-.5z"/>
  </svg>
Biz bilan bog'lanish
</button>

            </div>
          </div>
       
        </div>
      </div>
<aside className="blog__sidebar ">
    <div className="single__widget pt-40">
        <ul className="widget__body categories">
            <li>
                <Link  legacyBehavior href="/blog">
                  <a><p>Sotuvchining reytingi</p> <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="currentColor">
  <path d="M316.7 17.8c-4.5-9.2-17.9-9.2-22.4 0l-65.5 134.6-148.6 21.6c-10.2 1.5-14.3 14-6.9 21.4l107.6 104.8-25.4 148.2c-1.7 10.1 8.9 17.8 18 13l133.1-70 133.1 70c9.1 4.8 19.7-2.9 18-13l-25.4-148.2 107.6-104.8c7.4-7.4 3.3-19.9-6.9-21.4l-148.6-21.6-65.5-134.6z"/>
</svg>
</span></a>
                </Link>
            </li>
            <li>
                <Link  legacyBehavior href="/blog">
                  <a><p>Tugallangan buyurtmalar</p> <span>375</span></a>
                </Link>
            </li>
            <li>
                <Link  legacyBehavior href="/blog">
                  <a><p>Jami 118 sharh</p> <span className="d-flex align-items-center pe-4"><span className="text-primary">114</span> <span className="text-danger">4</span></span></a>
                </Link>
            </li>
            <li>
                <Link  legacyBehavior href="/blog">
                  <a><p>Buyurtmalar bajarilmoqda</p> <span>0</span></a>
                </Link>  
            </li>
            <hr className="widget__body categories"/>
            
           
        </ul>
    </div>
    <ul className="community_social__links d-flex flex-wrap justify-content-around list-unstyled">
      <li className="mx-2">
        <Link legacyBehavior href="https://t.me/username">
          <a target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <i className="bi bi-telegram" style={{ fontSize: "24px", color: "#0088cc" }}></i>
          </a>
        </Link>
      </li>
      <li className="mx-2">
        <Link legacyBehavior href="https://www.facebook.com/username">
          <a target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <i className="bi bi-facebook" style={{ fontSize: "24px", color: "#1877F2" }}></i>
          </a>
        </Link>
      </li>
      <li className="mx-2">
        <Link legacyBehavior href="https://www.instagram.com/username">
          <a target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <i className="bi bi-instagram" style={{ fontSize: "24px", color: "#C13584" }}></i>
          </a>
        </Link>
      </li>
      <li className="mx-2">
        <Link legacyBehavior href="https://github.com/username">
          <a target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <i className="bi bi-github" style={{ fontSize: "24px", color: "#333" }}></i>
          </a>
        </Link>
      </li>
      <li className="mx-2">
        <Link legacyBehavior href="tel:+1234567890">
          <a target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <i className="bi bi-telephone" style={{ fontSize: "24px", color: "#28a745" }}></i>
          </a>
        </Link>
      </li>
      <li className="mx-2">
      <Link legacyBehavior href="https://www.linkedin.com/in/your-profile">
  <a target="_blank" rel="noopener noreferrer" className="text-decoration-none">
    <i className="bi bi-linkedin" style={{ fontSize: "24px", color: "#0077b5" }}></i>
  </a>
</Link>
</li>
    </ul>
</aside>
</>
)
}
export default SectionsSidebar