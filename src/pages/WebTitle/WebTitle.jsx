import { useEffect } from "react"

const webTitle = (web)=>{
    useEffect(()=>{
        document.title = `Toys Store | ${web}`
    },[])
}
export default webTitle;