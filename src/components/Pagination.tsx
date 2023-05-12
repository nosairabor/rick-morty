import ReactPaginate from "react-paginate";

interface Props{
    setPage: any;
    page:any;
    info:any;
}

const Pagination:React.FC<Props> = ({page, setPage,info}) => {
    return ( 
        <div>
            <ReactPaginate
                className="flex justify-center gap-5 mt-10 pb-5"
                forcePage={page ===1 ? 0 :page - 1}
                pageCount={info?.pages}
                previousLabel="Prev"
                nextLabel="Next"
                nextClassName="bg-blue rounded-[5px] w-[70px] text-white 
                text-center cursor-pointer text-[20px] py-2"
                previousClassName="bg-blue rounded-[5px] w-[70px] text-white 
                text-center cursor-pointer text-[20px] py-2"
                pageClassName=" border-[#dee2e6] border rounded-[5px] w-[50px] text-blue
                text-center cursor-pointer text-[20px] py-2"
                onPageChange={(data)=>{
                    setPage(data.selected +1) //adds 1 to the (selected number value) because the indexing starts from 0,
                }}                              //which doesn't match the pagination which starts from 1
                activeClassName="bg-blue text-white border-b-4 border-blue"
            />
        </div>
    );
}
 
export default Pagination;