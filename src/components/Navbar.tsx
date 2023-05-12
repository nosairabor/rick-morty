import { useState } from "react";
import './colorNavToggle.css';

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
                <p className="text-3xl font-thin mt-2 ml-14 pb-2"> Rick & Morty<span className="text-blue"> WiKi</span></p>
                <div className="flex space-x-5 mt-2 mr-14 text-[21px] pb-2">
                    <div className={divClasses[0]} onClick={() => handleToggleClick(0)}>Characters</div>
                    <div className={divClasses[1]} onClick={() => handleToggleClick(1)}>Episodes</div>
                    <div className={divClasses[2]} onClick={() => handleToggleClick(2)}>Location</div>
                </div>
            </header>

        </div>

    );
}
 
export default Navbar;