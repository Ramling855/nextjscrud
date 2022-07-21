import  styles from '../styles/globals.css'
// import nav from "../components/nav"
import nav  from '../components/nav'
function MyApp({ Component, pageProps }) {
  return<>
  <nav> <Component {...pageProps} /></nav>
  
  </>
}

export default MyApp
