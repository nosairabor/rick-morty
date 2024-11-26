import { useState } from "react";
import './colorNavToggle.css';
import { Link, useLocation } from "react-router-dom";
import { BsList,BsXLg } from 'react-icons/bs';  //import hamburger-icon

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);
    const location = useLocation();

    const handleToggleClick = (index: number) => {
        setHamburger(false);
    };

    const hamburgerToggle = () =>{     //function to toggle
        setHamburger(!hamburger);     // the hamburger icon
    }
    return (
        <div className="container">
            
            <header className="xl:flex justify-between p-3">
                <Link to="/" className="text-[24px] md:text-3xl font-thin mt-2 ml-0 pb-2 xl:ml-14">
                     Rick & Morty<span className="text-blue"> WiKi</span>
                </Link>
                

                {/* desktop navbar */}
                <div className="hidden xl:flex space-x-5 mt-2 mr-14 text-[21px] pb-2">
                    <Link to="/" 
                    className={
                        location.pathname === "/" || location.pathname.startsWith("/characters")
                          ? "color-toggle-div clicked"
                          : "unclicked"
                    }
                    onClick={() => handleToggleClick(0)}>
                        Characters
                    </Link>

                    <Link to="/episode" 
                    className={
                        location.pathname === "/episode" || location.pathname.startsWith("/episode/")
                          ? "color-toggle-div clicked"
                          : "unclicked"
                    }
                    onClick={() => handleToggleClick(1)}>
                        Episodes
                    </Link>

                    <Link to="/location"
                    className={
                        location.pathname === "/location" || location.pathname.startsWith("/location/")
                          ? "color-toggle-div clicked"
                          : "unclicked"
                    }
                    onClick={() => handleToggleClick(2)}>
                        Location
                    </Link>
                </div>
                 
                <div className="relative xl:hidden">
                    <div className=" flex justify-end font-extrabold text-3xl mr-2 mt-[-30px] xl:hidden" onClick={hamburgerToggle}>
                        {hamburger ? (
                            <BsXLg/>
                        ) : (
                            <BsList/>
                        )}
                    </div>

                    
                    {/* mobile navbar */}
                    <div className={`relative font-light flex justify-start flex-col text-[21px] mt-2
                        xl:hidden ${hamburger? "flex":"hidden"} mobile-navbar`}
                        >
                        <Link to="/" className={`mb-2 ${location.pathname === "/" || location.pathname.startsWith("/characters")
                          ? "color-toggle-div clicked" : "unclicked"}`}
                          onClick={() => handleToggleClick(0)}>Characters</Link>
                        
                        <Link to="/episode" className={`mb-2 ${location.pathname === "/episode" || location.pathname.startsWith("/episode/")
                          ? "color-toggle-div clicked"
                          : "unclicked"}`} 
                        onClick={() => handleToggleClick(1)}>Episodes</Link>
                        
                        <Link to="/location" 
                        className={`mb-2 -${location.pathname === "/location" || location.pathname.startsWith("/location/")
                        ? "color-toggle-div clicked"
                        : "unclicked"}`} 
                        onClick={() => handleToggleClick(2)}>Location</Link>
                    </div>
                </div>
            </header>

        </div>

    );
}
 
export default Navbar;