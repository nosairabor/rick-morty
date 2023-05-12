import { useEffect, useState } from "react";
import { getCharacters } from "../store/Action";
import { useAppDispatch, useAppSelector } from "../store";
import Cards from "./Cards";
import Pagination from "./Pagination";
import Search from "./Search";

const Home = () => {
    const dispatch = useAppDispatch();
    const userData = useAppSelector((state) => state.user.data);
    const loading = useAppSelector((state) => state.user.loading);
    const error = useAppSelector((state) => state.user.error);

    const [page, setPage] = useState(1); //setting the default pagination page
    const [search, setSearch] = useState("");

    const {info, results} = userData
    
    console.log(results);
    useEffect(() => {
        dispatch(getCharacters({pageNumber: page,search:search}));
    },[dispatch, page,search]);
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
        <div>
            <h1 className="text-center text-[2.8rem] mt-4">Characters</h1>
            <Search setPage={setPage} setSearch={setSearch}/>
            <div className="flex gap-x-10 justify-center">
                <div className="">Filter</div>
                <Cards results={results}/>
            </div>
            <Pagination info={info} page={page} setPage={setPage}/>
        </div>
    );
}
 
export default Home
