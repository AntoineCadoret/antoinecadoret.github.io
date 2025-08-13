import * as React from "react";
import { Link } from "gatsby";
import "../styles/global.css";

const nameStyles = {
    color: "#fecd35"
};
const secondTitleStyle = {
    fontFamily: "Helvetica"

};

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-20 bg-white py-5 lg:p-14">
            <div className="w-full lg:flex lg:justify-between lg:items-center relative">
                <div className="hidden lg:block w-1/3"></div>
                <div className="lg:absolute w-screen lg:w-1/3 my-2 text-center lg:left-1/2 lg:transform lg:-translate-x-1/2 flex flex-col items-center">
                    <h1 className="py-2 text-xl lg:text-5xl font-['Agbalumo']" style={nameStyles}>Antoine Cadoret</h1>
                    <h2 className="py-2 text-lg lg:text-2xl" style={secondTitleStyle}>Développeur Full-Stack</h2>
                </div>
                <nav className="w-screen lg:w-1/3 flex justify-around lg:justify-end">
                    <Link activeStyle={{ textDecoration: "underline", color: "#fecd35" }} className="mx-2 hover:text-[#fecd35] hover:underline active:text-[#fecd35] active:underline" to="/">Accueil</Link>
                    <Link activeStyle={{ textDecoration: "underline", color: "#fecd35" }} className="mx-2 hover:text-[#fecd35] hover:underline active:text-[#fecd35] active:underline" to="/apropos">À propos</Link>
                    <Link activeStyle={{ textDecoration: "underline", color: "#fecd35" }} className="mx-2 hover:text-[#fecd35] hover:underline active:text-[#fecd35] active:underline" to="/mesprojets">Mes projets</Link>
                </nav>
            </div>
        </header>
    );
};
export default Header;