import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// Action
export const fetchStageMaster=createAsyncThunk("fetchStageMaster",async()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>
            res.json()).then((json)=>{
                console.log("jsondata",json);
                return json
            })
        return response
    }catch(err){
        console.log(err);
        return err;
    }
    
})

const getStageMaster=createSlice({
    name:"getStageMaster",
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{
            builder.addCase(fetchStageMaster.pending,(state,action)=>{
                state.isLoading=true;
            })
            builder.addCase(fetchStageMaster.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.data=action.payload;
            })
            builder.addCase(fetchStageMaster.rejected,(state,action)=>{
                console.log("Error",action.payload);
                state.isError=true;
            })
    }
})

export default getStageMaster.reducer