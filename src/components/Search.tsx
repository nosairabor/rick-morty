import * as Yup from "yup"
import { Formik, Form, FormikProps } from "formik";

interface Props{
    setSearch:any;
    setPage: any;
}
interface searchValues {
    search: string;
};

const validationSchema = Yup.object({
    search: Yup                       //validation
        .string()
});
const initialValues = {
    search: ""
};

const Search:React.FC<Props> = ({setSearch, setPage}) => {
    // const onSubmit = (values:searchValues, e:any) =>{
    //     setSearch(values.search)
    // }

    return (  
        <div className="text-center mt-3 pb-10">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={()=>{}}
            >
                {(props: FormikProps<searchValues>)=>(
                    <Form>
                        <input
                            type="text"
                            placeholder="Search for characters"
                            className="w-[300px] xl:w-[570px] rounded-[8px] drop-shadow-xl p-3 border-2
                            border-[#0b5ed7] border-solid "
                            onChange={(e)=>{
                                setSearch(e.target.value);
                                setPage(1);
                            }}
                        />
                        <div className="xl:hidden"></div>
                        <button type="submit" className="bg-blue rounded-[5px] 
                            w-[88px] mt-4 text-white drop-shadow-xl text-center ml-2 text-[20px] py-2
                            xl:bg-blue rounded-[5px] 
                            w-[88px] text-white drop-shadow-xl text-center ml-2 text-[20px] py-2">
                                Search
                        </button>
                        
                    </Form>
                )}
            </Formik>
        </div>
    );
};
 
export default Search;