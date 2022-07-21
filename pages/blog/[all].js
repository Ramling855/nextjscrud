import { useRouter } from 'next/router'
const all=()=>{
    const router=useRouter()
    const {all}=router.query
    return<>
    <h1>
your name={all}</h1>
    </>
    }
    export default all;