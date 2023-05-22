import { useState } from 'react';
import Status from './Categories/Status';
import Species from './Categories/Species';
import Gender from './Categories/Gender';
import { BsWindowSidebar } from 'react-icons/bs';

interface PropType{
  setStatuss:any;
  setPage:any;
  setGenderr:any;
  setSpeciess:any;
}

const Filters:React.FC<PropType> = ({setStatuss,setPage,setGenderr,setSpeciess}) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordionToggle = (accordionName: string) => {
    setOpenAccordion((prevAccordion) => (prevAccordion === accordionName ? null : accordionName));
  };
  
  const clearFilters =() =>{     //function to clear all the filters
    setStatuss("");
    setPage("");
    setGenderr("");
    setSpeciess("");
    window.location.reload();
  }

  return (
    <div className="">
      <div className="font-bold text-[24px] flex justify-center pb-3">Filters</div>

      <div className=" cursor-pointer text-blue text-[16px] flex justify-center
        underline decoration-solid pb-3 " onClick={clearFilters}>
        Clear Filters
      </div>

      <div className="w-[350px] xl:w-[300px] border border-gray2 rounded-[5px] grid grid-cols-1 justify-center divide-y divide-gray2">
        <Status isOpen={openAccordion === 'Status'} toggleAccordion={handleAccordionToggle} 
          setStatuss={setStatuss} setPage={setPage}/>
        <Species isOpen={openAccordion === 'Species'} toggleAccordion={handleAccordionToggle}
          setSpeciess={setSpeciess} setPage={setPage}/>
        <Gender isOpen={openAccordion === 'Gender'} toggleAccordion={handleAccordionToggle} 
          setGenderr={setGenderr} setPage={setPage}/>       
        
      </div>
    </div>
  );
};

export default Filters;
