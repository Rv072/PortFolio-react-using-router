import { Link } from "react-router-dom"
import "./Home.css"
function Home() {
    return (
        <>


            <div className="header" style={{ display: "flex", gap: "20px" }}>

                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Myproject">Few Of My Project</Link>
                <Link to="/Contactme">Contact Me</Link>
                <Link to="/details/:funId/Ravi">Details</Link>
                <div className="ocean">
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </div>
            {/*Home Detail */}
            <div className="homeDetail">
                <h1>Hey, I'm Ravi Kanthali ;)</h1>
                <h2>Web Developer</h2>
                <h4>Frontend Developer / Web Developer / ReactJS Developer</h4>

            </div>

        </>
    )
}
export default Home
