import "./NavigationBar.css";

type NavigationProps = {

}
export const NavigationBar = ({ }: NavigationProps) => {
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#home">Home</a></li>
                <li className="navbar-item"><a href="#about">Portfolio</a></li>
                <li className="navbar-item"><a href="#services">Career</a></li>
                <li className="navbar-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}