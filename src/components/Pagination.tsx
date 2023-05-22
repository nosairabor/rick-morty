import ReactPaginate from "react-paginate";
import { useState } from 'react';
import { useEffect } from 'react';

interface Props{
    setPage: any;
    page:any;
    info:any;
}

const Pagination:React.FC<Props> = ({page, setPage,info}) => {
    const [width, setWidth] = useState(window.innerWidth);

    const updateDimension = () =>{
        setWidth(window.innerWidth);
    };

    useEffect(()=>{
        window.addEventListener("resize",updateDimension);
        return () => window.removeEventListener("resize",updateDimension);
    },[])
    // console.log(width);
    return ( 
        <div>
            <style>
                {`
                    @media (max-width:850px) {
                        .next,
                        .prev{
                            display:none;
                        }
                        .pagination{
                            font-size:12px;
                        }
                    }
                `}
            </style>
            <ReactPaginate
                className="flex justify-center gap-5 mt-10 pb-5"
                forcePage={page ===1 ? 0 :page - 1}
                pageCount={info?.pages}
                previousLabel="Prev"
                nextLabel="Next"
                nextClassName="bg-blue rounded-[5px] w-[70px] text-white 
                text-center cursor-pointer text-[20px] py-2 next"
                previousClassName="bg-blue rounded-[5px] w-[70px] text-white 
                text-center cursor-pointer text-[20px] py-2 prev"
                pageClassName="pagination border-[#dee2e6] border rounded-[5px] w-[50px] text-blue
                text-center cursor-pointer text-[20px] py-2"
                onPageChange={(data)=>{
                    setPage(data.selected +1) //adds 1 to the (selected number value) because the indexing starts from 0,
                }}                              //which doesn't match the pagination which starts from 1
                activeClassName="bg-blue text-white border-b-4 border-blue"
                marginPagesDisplayed={width < 600 ? 1: 2}
                pageRangeDisplayed={width < 600 ? 1: 2}
            />
        </div>
    );
}
 
export default Pagination;