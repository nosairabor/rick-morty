import {createSlice} from '@reduxjs/toolkit';
import { getCharacters,getEpisodes,getLocations,getCharacterById } from './Action';

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
        builder.addCase(getCharacters.fulfilled, (state,action)=>{    //characters
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getCharacters.rejected, (state, action)=>{
            state.loading=false;
            state.error = action.error;
        });
        
        
        
        builder.addCase(getEpisodes.pending,(state)=>{
            state.loading = true;
            state.loading= null;
        });
        builder.addCase(getEpisodes.fulfilled, (state,action)=>{        //episodes
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getEpisodes.rejected, (state, action)=>{
            state.loading=false;
            state.error = action.error;
        });


        
        builder.addCase(getLocations.pending,(state)=>{
            state.loading = true;
            state.loading= null;
        });
        builder.addCase(getLocations.fulfilled, (state,action)=>{        //locations
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getLocations.rejected, (state, action)=>{
            state.loading=false;
            state.error = action.error;
        });



        builder.addCase(getCharacterById.pending,(state)=>{
            state.loading = true;
            state.loading= null;
        });
        builder.addCase(getCharacterById.fulfilled, (state,action)=>{        //
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getCharacterById.rejected, (state, action)=>{
            state.loading=false;
            state.error = action.error;
        });

    },
    
});
export const { } = userSlice.actions;
export default userSlice.reducer;