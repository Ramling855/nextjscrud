// import axios from "axios"
const data=()=>{
    const add=()=>{
        axios.post("http://localhost:9000/post")
    }
return(<div>
    <button onClick={add}>add</button>

hello
    </div>
)
}
export default data;
