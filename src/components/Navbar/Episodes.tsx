import { getEpisodes } from "../../store/Action";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from '../Cards';
import SelectInput from './SelectInput';


const Episodes = () => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector((state) => state.user.data);
    const loading = useAppSelector((state) => state.user.loading);
    const error = useAppSelector((state) => state.user.error);

    const [id, setId] = useState(1);
    const [results, setResults] = useState<any[]>([]);
    const {name, air_date,characters} = userData;

    // console.log(results);

    useEffect(() => {
        const fetchData = async () => {
          if (characters) {
            const characterData = await Promise.all(
              characters.map((x: any) => axios.get(x).then((res) => res.data))
            );
            setResults(characterData);
            // console.log(characterData);
          }
        };
    
        fetchData();
        dispatch(getEpisodes({ id: id }));
    }, [dispatch, id, characters]);


    if (loading) {
        return <div>Loading...</div>;
    }
      
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }
      
    if (!userData) {
        return null;
    }
    const isXlScreen = window.matchMedia("(min-width: 1280px)").matches;
    const episodesClass = isXlScreen
        ? "-ml-[100px] flex space-x-10 justify-center mt-6"
        :"ml-0 flex flex-col mt-6 items-center"
    ;
    return (
        <div className="">
            <h1 className="text-center text-[2.4rem] mt-4">
                Episode name :{" "}
                <span className="text-blue">{name ==="" ? "Unknown": name}</span>
            </h1>
            <p className="text-center text-[19px] m-2">
                Air Date:{" "}
                <span className="">{air_date ==="" ? "Unknown": air_date}</span>
            </p>

            <div className={episodesClass}>
                <div>
                    <p className="text-[24px] text-center">Pick Episode</p>
                    <SelectInput total={51} setId={setId} name="Episode"/>
                </div>
                
                <Cards page="/episode/" results={results}/>
            </div>
            
        </div>
    );
}
 
export default Episodes;

