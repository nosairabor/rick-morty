interface PropType{
    name: string;
    index: any;
    items:any;
    task:any;
    setPage: any;
}


const FiltersBTN:React.FC<PropType> = ({items, name, index,task,setPage}) => {
    const handleItemClick = () => {
        setPage(1);
        task(items);
    };
    // console.log(task)
    return ( 
        <div className="">
            <style>
                {`
                    .x:checked + label{
                        background-color: #0b5ed7;
                        color: white;
                    }
                    input[type="radio"] {
                        display:none;
                    }
                `}
            </style>
            <input
                onClick={handleItemClick}
                className="x"
                type="radio"
                name={name}
                id={`${name}-${index}`}
                
            />
            <label className=" border-blue bg-white border rounded-[5px] w-[50px] text-blue
                cursor-pointer hover:bg-blue hover:text-white text-[17px] px-3 py-2 
                transition ease-in-out delay-150 bg-blue-500"
                htmlFor={`${name}-${index}`}>{items}</label>

        </div>
    );
}
 
export default FiltersBTN;