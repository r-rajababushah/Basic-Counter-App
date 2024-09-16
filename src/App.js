import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <>
            <div className="mycls">

                {/* First Header  */}
                <div className="logoS">
                    <a href="/"><img src="#" alt="logo" /></a>
                    <div className="fMenu" >
                        <ul className="adminD">
                            <li><a href="#">Language </a></li>
                            <li><a href="#">Sign Up </a></li>
                            <li><a href="#">Log In </a></li>
                        </ul>
                    </div>
                </div>

                {/* Second Header */}
                <div className="menuM">
                    <div className="menuI">
                        <span id="menuIcon">

                        </span>
                        <span id="homeB">
                            <p><Link to="/home">Home</Link></p>
                            <p>Search</p>
                            <p><Link to="/hotels">Hotels</Link></p>
                            <p><Link to="/resturnats">Resturants</Link></p>
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

                <div className='homeMain'>
                    <Outlet />
                </div>

            </div>
        </>
    );
}

export default App;
