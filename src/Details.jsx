import { useParams } from "react-router-dom"
import Home from "./Home"

function Details() {
    const params = useParams()
    console.log(params);
    return (
        <>
            <Home />
            <h1>Hello Here is my details and params is{params.uId}</h1>
        </>
    )
}
export default Details