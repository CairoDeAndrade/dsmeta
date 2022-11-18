import "./styles.css";
import logo from "../../assets/img/logo.svg";

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Developed by;
                        <a href="https://www.linkedin.com/feed/"> Cairo Augusto de Andrade</a>
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header;
