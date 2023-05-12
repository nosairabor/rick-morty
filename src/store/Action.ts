import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface paginationType{
    pageNumber: number;
    search: string;
}


export const getCharacters = createAsyncThunk(
    'user/getCharacters',
    async ({pageNumber,search}:paginationType) => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`);
        return response.data
    }
);