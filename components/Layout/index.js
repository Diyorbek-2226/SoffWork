import Head from "next/head"
import { useEffect , useContext } from "react"
import ThemeContext from "../../context/Theme/ThemeContext"

const Layout=({children})=>{

const { DarkTheme , setDarkTheme } = useContext(ThemeContext)  

useEffect(()=>{

},[])

return(
<>
<Head>
   
   <title>Soff works platform</title>
   <meta charSet="utf-8"/>
   <meta name="viewport" content="width=device-width, initial-scale=1"/>
  
   <link rel="icon" href="https://soff.uz/static/img/soff/logo-dark.png" type="image/gif" sizes="20x20"/>
   <link rel="stylesheet" href="/fonts/loader.css"/>
</Head>
<main className={`${DarkTheme?'theme-dark-active':'theme-light-active'}`}>

{children}
</main>
</>
)
}
export default Layout