import SidebarBlogList from "./Sidebar/BlogList"
import Link from "next/link"

const BlogSidebar=()=>{
return(
<>
<aside className="blog__sidebar">
    <div className="single__widget ">
        <h5 className="widget__title">Raqamli texnika va smm sohasida </h5>
        <ul className="widget__body categories">
            <li>
                <Link legacyBehavior  href="/blog">
                <a><p>ssm va tarmoqli marketing </p> </a>
                </Link>
            </li>
            <li>
                <Link legacyBehavior  href="/blog">
                  <a><p>Marketing </p> </a>
                </Link>
            </li>
            <li>
                <Link legacyBehavior  href="/blog">
                  <a><p>Marketing</p> </a>
                </Link>
            </li>
            <li>
                <Link legacyBehavior  href="/blog">
                <a><p>Marketing</p> </a>
                </Link>  
            </li>
            <li>
                <Link legacyBehavior  href="/blog">
          <a><p>Marketing</p> </a>
                </Link>
            </li>
            <li>
                <Link legacyBehavior  href="/blog"> 
                <a><p>Marketing</p> </a>
                </Link>
            </li>
        </ul>
    </div>
</aside>
</>
)
}
export default BlogSidebar