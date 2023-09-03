import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState ={

    categories:[],
    searchInput:''
}

export const getCategories = createAsyncThunk('category',async()=>{

    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data=response.json();
    return data;

})

const categorySlice = createSlice({

    name:"categories",
    initialState,
    reducers:{
        setSearchInput: (state,action)=>{

            console.log(action.payload)
            state.searchInput=action.payload



        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(getCategories.fulfilled, (state,action)=>{

            state.categories=action.payload;



        })



    }


})

export const {setSearchInput}=categorySlice.actions
export default categorySlice.reducer