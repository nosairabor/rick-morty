import { useEffect, useState } from "react";
import { getCharacters } from "../store/Action";
import { useAppDispatch, useAppSelector } from "../store";
import Cards from "./Cards";
import Pagination from "./Pagination";
import Search from "./Search";
import Filters from './Filters';

const Home = () => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector((state) => state.user.data);
    const loading = useAppSelector((state) => state.user.loading);
    const error = useAppSelector((state) => state.user.error);

    const [page, setPage] = useState(1); //setting the default pagination page
    const [search, setSearch] = useState("");
    const [statuss, setStatuss] = useState("");
    const [genderr, setGenderr] = useState("");
    const [speciess, setSpeciess] = useState("");

    const {info, results} = userData
    
    // console.log(results);
    useEffect(() => {
        dispatch(getCharacters({pageNumber: page,search:search, statuss:statuss,genderr:genderr,speciess:speciess}));
    },[dispatch, page,search,statuss,genderr,speciess]);
    if (loading) {
        return <div>Loading...</div>;
    }
      
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }
    if (!userData) {
        return null;
    }
    
    const status = ["Alive", "Dead", "Unknown"];

    const isXlScreen = window.matchMedia("(min-width: 1280px)").matches;
    const filtersContainerClass = isXlScreen
        ? "-ml-[100px] flex flex-row  space-x-10 justify-center"
        : "ml-0 flex flex-col items-center"
    ;
    const headingClass = isXlScreen 
        ? "text-[2.8rem] text-center mt-4"
        : "text-center text-[28px] mt-4"
    ;
    console.log(genderr)
    return (
        <div>
            <h1 className={headingClass}>Characters</h1>
            <Search setPage={setPage} setSearch={setSearch}/>
            <div className={`${filtersContainerClass}`}>
                <Filters setSpeciess={setSpeciess} setGenderr={setGenderr} setStatuss={setStatuss} setPage={setPage}/>
                <Cards page="/" results={results}/>
            </div>
            <Pagination info={info} page={page} setPage={setPage}/>

            

        </div>
    );
}
 
export default Home
