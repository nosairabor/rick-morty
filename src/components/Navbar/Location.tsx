import { getLocations } from "../../store/Action";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from '../Cards';
import SelectInput from './SelectInput';


const Location = () => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector((state) => state.user.data);
    const loading = useAppSelector((state) => state.user.loading);
    const error = useAppSelector((state) => state.user.error);

    const [id, setId] = useState(1);
    const [results, setResults] = useState<any[]>([]);
    const {name, dimension, type, residents} = userData;

    console.log(results);

    useEffect(() => {
        const fetchData = async () => {
          if (residents) {
            const residentData = await Promise.all(
                residents.map((x: any) => axios.get(x).then((res) => res.data))
            );
            setResults(residentData);
            console.log(residentData);
          }
        };
    
        fetchData();
        dispatch(getLocations({ id: id }));
    }, [dispatch, id, residents]);


    if (loading) {
        return <div>Loading...</div>;
    }
      
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }
      
    if (!userData) {
        return null;
    }

    return (
        <div className="">
            <h1 className="text-center text-[2.4rem] mt-4">
                Location :{" "}
                <span className="text-blue">{name ==="" ? "Unknown": name}</span>
            </h1>
            <p className="text-center text-[21px] m-2">
                Dimension:{" "}
                <span className="">{dimension ==="" ? "Unknown": dimension}</span>
            </p>
            <p className="text-center text-[17px] m-2">
                Type:{" "}
                <span className="">{type ==="" ? "Unknown": type}</span>
            </p>

            <div className="-ml-[100px] flex space-x-10 justify-center mt-6">
                <div>
                    <p className="text-[24px] text-center">Pick Episode</p>
                    <SelectInput total={126} setId={setId} name="Location"/>
                </div>
                
                <Cards results={results}/>
            </div>
            
        </div>
    );
}
 
export default Location;

