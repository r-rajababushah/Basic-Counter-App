import { Link, Outlet } from "react-router-dom";
import FHead from "../FHead/FHead";
import Footer from "../Footer/Footer";
import "./Layout.css";

export default function Layout() {
    return (
        <>
            <FHead />
            <div className="NavHeader">
                <div className="menuM">

                    
                    <div className="menuI">
                        <span id="menuIcon">

                        </span>
                        <span id="homeB">
                            <p><Link to="/">Home</Link></p>
                            <p>Search</p>
                            <p><Link to="/hotels">Hotels</Link></p>
                            <p><Link to="/resturants">Resturants</Link></p>
                        </span>
                    </div>

                    <div className="menuS">
                        <span id="underratedP">
                            <p>&#8595; &nbsp; Underrated Places </p>
                        </span>
                        <span id="emergencyN">
                            <p>&#8595; &nbsp; Emergency Number </p>
                        </span>
                    </div>


                </div>
            </div>
            <div className="Outlett">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}