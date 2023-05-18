import { useState } from "react";
import './colorNavToggle.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isToggled, setIsToggled] = useState<boolean[]>([true, false, false]);
    const [lastClickedIndex, setLastClickedIndex] = useState<number>(0);

    const handleToggleClick = (index: number) => {
        setIsToggled(prevState => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        if (lastClickedIndex >= 0 && lastClickedIndex !== index) {
            newState[lastClickedIndex] = false;
        }
        setLastClickedIndex(index);
        return newState;
        });
    };

    const divClass = 'unclicked';
    const ToggledDivClass = 'color-toggle-div clicked';

    const divClasses = isToggled.map((color, index) =>
        index === lastClickedIndex ? ToggledDivClass: divClass
    );

    return (
        <div className="container">
            
            <header className="flex justify-between p-3">
                <Link to="/" className="text-3xl font-thin mt-2 ml-14 pb-2"> Rick & Morty<span className="text-blue"> WiKi</span></Link>
                <div className="flex space-x-5 mt-2 mr-14 text-[21px] pb-2">
                    <Link to="/" className={divClasses[0]} onClick={() => handleToggleClick(0)}>Characters</Link>
                    <Link to="/episode" className={divClasses[1]} onClick={() => handleToggleClick(1)}>Episodes</Link>
                    <Link to="/location" className={divClasses[2]} onClick={() => handleToggleClick(2)}>Location</Link>
                </div>
            </header>

        </div>

    );
}
 
export default Navbar;