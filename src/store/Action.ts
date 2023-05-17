import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface ActionType{
    pageNumber: number;
    search: string;
    statuss:any;
    genderr:any;
    speciess:any;
}


export const getCharacters = createAsyncThunk(
    'user/getCharacters',
    async ({pageNumber,search,statuss,genderr,speciess}:ActionType) => {
        const response = await axios.get
        (`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${statuss}&gender=${genderr}&species=${speciess}`);
        return response.data
    }
);