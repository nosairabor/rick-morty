import {createSlice} from '@reduxjs/toolkit';
import { getCharacters } from './Action';

interface UserState {
    data: any;
    loading: any;
    error: any;
}
const initialState: UserState = { 
    data: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCharacters.pending,(state)=>{
            state.loading = true;
            state.loading= null;
        });
        builder.addCase(getCharacters.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getCharacters.rejected, (state, action)=>{
            state.loading=false;
            state.error = action.error;
        });
    },
    
});
export const { } = userSlice.actions;
export default userSlice.reducer;