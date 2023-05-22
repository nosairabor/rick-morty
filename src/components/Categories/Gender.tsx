import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp} from 'react-icons/bs';
import { useState } from 'react';
import FiltersBTN from './FiltersBTN';


interface StatusProps {
    isOpen: boolean;
    toggleAccordion: (accordionName: string) => void;
    setGenderr:any;
    setPage:any;
}

const Gender: React.FC<StatusProps> = ({ isOpen, toggleAccordion, setGenderr,setPage }) => {
    
    
    
    const gender = ["female", "male", "genderless", "unknown"]
    const handleStatusSelect = (status: string) => {
        setPage(1);
        setGenderr(status);
    };

    const isXlScreen = window.matchMedia("(min-width: 1280px)").matches;
    const episodesClass = isXlScreen
        ? "flex space-x-[175px] h-[52px] cursor-pointer"
        :"flex space-x-[244px] h-[52px] cursor-pointer"
    ;

    return ( 
        
        <div className="">
                <div className="item">
                    <div className={`${episodesClass} ${isOpen?'bg-[#e7f1ff]':'bg-white'} `}
                        onClick={() => toggleAccordion('Gender')}
                    >

                        <p className={`p-3 ${isOpen?'text-blue':'text-black'} `}>Gender</p>
                        <div className="m-4">
                            {isOpen ? (
                                <BsChevronUp  />
                            ) : (
                                <BsChevronDown/>
                            )}
                        </div>
                    </div>
                    <div className='flex flex-wrap transition duration-150 delay-700 ease-in-out' >
                        {isOpen &&
                            gender.map((items, index) => (
                                <>
                                    <div className='m-4 pl-5 gap-7
                                        '>
                                        <FiltersBTN 
                                            items={items}
                                            key={index} 
                                            name="gender" 
                                            index={index}
                                            task={handleStatusSelect}
                                            setPage={setPage}
                                        />
                                    </div>
                                </>
                        ))}
                    </div>
                </div>
        </div>
                

    );
}
 
export default Gender;