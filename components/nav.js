import Link from 'next/link'
const nav=()=>{
    return<>
  <h1>Navbar</h1>
       <li>
        <Link href={"/blog"}>
        blog</Link>
       </li>
        </>
}
export default nav;