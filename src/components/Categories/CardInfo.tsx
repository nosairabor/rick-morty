import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { useState,useEffect } from "react";
import { getCharacterById } from "../../store/Action";


const CardInfo = () => {

    const dispatch = useAppDispatch();
    const userData = useAppSelector((state) => state.user.data);
    const loading = useAppSelector((state) => state.user.loading);
    const error = useAppSelector((state) => state.user.error);

    
    const { name, origin, image, status, gender, location,species} = userData;
    const [results, setResults] = useState<any[]>([]);
    const {id} = useParams<{id:string}>()

    
   
    // const {id} = useParams<{id:string}>();

    useEffect(() =>{
        dispatch(getCharacterById({id:id}))
    },[dispatch])
    console.log(userData);

    return (
        <div className="grid justify-center">
            <h1 className="text-[42px] mt-5 text-center">{name}</h1>
            <img src={image} className="mt-5 mb-4"/>
            {(() =>{
                if (status==='Alive'){
                    return(
                        <div className="bg-green rounded-[5px] w-[300px] text-white 
                        text-center text-[19px] font-bold p-1 ">
                            {status}
                        </div>
                    )
                } else if(status==='Dead'){
                    return(
                        <div className="bg-red rounded-[5px] w-[300px] text-white 
                        text-center text-[19px] font-bold p-1 ">
                            {status}
                        </div>
                    )
                } else{
                    return(
                        <div className="bg-gray rounded-[5px] w-[300px] text-white 
                        text-center text-[19px] font-bold p-1 ">
                            {status}
                        </div>
                    )
                }
            })()}
            <div className="mt-4">
                <div><span className="font-bold">Gender :</span>{" "} {gender}</div>
                <div><span className="font-bold">Location :</span>{" "}{location?.name}</div>
                <div><span className="font-bold">Origin :</span>{" "}{origin?.name}</div>
                <div><span className="font-bold">Species:</span>{" "}{species}</div>
            </div>
            
        </div>
        
    );
}
 
export default CardInfo;