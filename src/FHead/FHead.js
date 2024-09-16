import "./FHead.css";

export default function FHead() {
    return (
        <>
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
        </>
    );
}