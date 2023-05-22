import { Link } from "react-router-dom";

interface Props{
    results:any;
    page: any;
}
const Cards: React.FC<Props> = ({ results, page })  => {
    let display;
    
    if(results){
        display = results.map((x: any) =>{
            const {id, name,image,location, status} = x
            return(
                <Link to={`${page}${id}`} key={id} className="border-2 border-blue xl:border-2
                 rounded-[10px] border-blue border-solid relative">
                    <div className="">
                        <img src={image} className="rounded-t-lg"/>
                        <div className="flex flex-col pt-2 px-2 ">
                            <div className="font-bold text-[18px]">{name}</div>
                            <div className="text-[15px] pt-4">Last Location</div>
                            <div className="text-[19px] leading-6 pb-2">{location.name}</div>
                            <>
                                {(() =>{
                                    if (status==='Alive'){
                                        return(
                                            <div className="bg-green rounded-[5px] w-[60px] text-white text-center absolute top-[7px] right-[7px] font-bold p-1 ">
                                                {status}
                                            </div>
                                        )
                                    } else if(status==='Dead'){
                                        return(
                                            <div className="bg-red w-[60px] rounded-[5px] text-white text-center absolute top-[7px] right-[7px] font-bold p-1 ">
                                                {status}
                                            </div>
                                        )
                                    } else{
                                        return(
                                            <div className="bg-gray w-[90px] rounded-[5px] text-white text-center absolute top-[7px] right-[7px] font-bold p-1 ">
                                                {status}
                                            </div>
                                        )
                                    }
                                })()}
                            </>
                            
                        </div>
                    </div>
                </Link>
            );
        });

    } else{
        display="No Characters Found :/"
    }

    return ( 
        <div className="grid-character gap-6">{display}</div>
    );
}
export default Cards;