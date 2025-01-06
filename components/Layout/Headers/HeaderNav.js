import { useContext , useState , useRef } from "react"
import ThemeContext from "../../../context/Theme/ThemeContext"
import Link from "next/link"
import HeaderConstant from "../../../constant/Header/HeaderConstant"
import { useIsVisible } from 'react-is-visible'


export default function HeaderNav() {
  return (
    <div className="container
    =">
         <nav>
      <ul className="d-flex align-items-center justify-content-between">
<li className="has-child-menu">Design</li>
<li className="has-child-menu">Development Id</li>
<li className="has-child-menu">Writing Transl </li>
<li className="has-child-menu">Seo Web travel </li> 
<li className="has-child-menu">Digiit  maining</li>
<li className="has-child-menu">Writing Transl </li>
      </ul>
      </nav> 
    </div>
  )
}
