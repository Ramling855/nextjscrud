import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Error=()=>{
const Router=useRouter()
const blog=()=>{
    Router.push("/blog")
}
useEffect(()=>{
    setTimeout(()=>{
        Router.push("/blog")
    },3000)
    
},[])

    return<>
<Link href={"/color"}>color</Link>
<button onClick={blog}>blog</button>
    <h1>errror</h1>
    </>
}
export default Error;