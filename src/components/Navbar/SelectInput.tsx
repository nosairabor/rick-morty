interface PropType {
    name: string;
    setId: any;
    total: any;
}

const SelectInput:React.FC<PropType> = ({name, setId, total}) => {
    return (
        <div className="mt-5">
            <select onChange={e=>setId(e.target.value)} 
                className="w-[300px] h-[35px] px-2 border border-gray2 rounded-[5px]
                focus:outline-none focus:ring-4 focus:ring-[#e7f1ff]"
            >
                <option selected>Choose...</option>

                {[...Array(total).keys()].map((x)=>{
                    return(
                        <option value={x + 1}>
                            {name} - {x + 1}
                        </option>
                    )
                })}
            </select>
        </div>
    );
}
 
export default SelectInput;
