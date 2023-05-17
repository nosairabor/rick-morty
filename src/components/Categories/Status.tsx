import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp} from 'react-icons/bs';
import { useState } from 'react';
import FiltersBTN from './FiltersBTN';

interface StatusProps {
    isOpen: boolean;
    toggleAccordion: (accordionName: string) => void;
    setStatuss:any;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}


const Status: React.FC<StatusProps> = ({ isOpen, toggleAccordion,setPage,setStatuss }) => {
    
    const status = ["Alive", "Dead", "Unknown"]

    const handleStatusSelect = (status: string) => {
        setPage(1);
        setStatuss(status);
    };
    return ( 
        
        <div>
                <div className="item">
                    <div className={`flex space-x-[175px] h-[52px] 
                        cursor-pointer ${isOpen?'bg-[#e7f1ff]':'bg-white'} `} 
                        onClick={() => toggleAccordion('Status')}>

                        <p className={`p-3 ${isOpen?'text-blue':'text-black'} `}>Status</p>
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
                            status.map((items, index) => (
                                <>
                                    <div key={index} className='m-4 pl-5 gap-7
                                        '>
                                        <FiltersBTN
                                            task={handleStatusSelect}
                                            setPage={setPage} 
                                            items={items}
                                            key={index} 
                                            name="status" 
                                            index={index}
                                        />
                                    </div>
                                </>
                        ))}
                    </div>
                </div>
            
        </div>
        
                

    );
}
 
export default Status;
