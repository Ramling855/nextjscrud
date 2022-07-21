import Image from "next/image";
const new =()=>{
    return<>
    {
        [1,2,3].map((ele)=>{
            <Image src={`/${ele}.jpg`} alt="img" width="280" height="420"/>
        })
    }


    </>
}
export default new;