import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface characterAction{
    pageNumber: number;
    search: string;
    statuss:any;
    genderr:any;
    speciess:any;
}
interface idAction {
    id: any;
}

export const getCharacters = createAsyncThunk(
    'user/getCharacters',
    async ({pageNumber,search,statuss,genderr,speciess}:characterAction) => {
        const response = await axios.get
        (`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${statuss}&gender=${genderr}&species=${speciess}`);
        return response.data
    }
);
export const getEpisodes = createAsyncThunk(
    'user/getEpisodes',
    async({id}:idAction) =>{
        const response = await axios.get
        (`https://rickandmortyapi.com/api/episode/${id}`);
        return response.data
    }
);
export const getLocations = createAsyncThunk(
    'user/getLocations',
    async({id}:idAction) =>{
        const response = await axios.get
        (`https://rickandmortyapi.com/api/location/${id}`);
        return response.data
    }
);
export const getCharacterById = createAsyncThunk(
    'user/getCharacterById',
    async({id}:idAction) =>{
        const response = await axios.get
        (`https://rickandmortyapi.com/api/character/${id}`);
        return response.data
    }
);