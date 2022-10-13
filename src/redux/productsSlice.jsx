import { createSlice } from "@reduxjs/toolkit";

//====> Second Method For Using Redux toolkit By Using (* createAsyncThunk(Action Creator) Function  With [reducerSlice.pending]:() , [reducerSlice.fullFilld]:() , [reducerSlice.reject]:() *)
// export const FetchingProducts = createAsyncThunk("fetchProducts", async ()=>{
//     const response = await axios.get('https://fakestoreapi.com/products').then(res => res.data);
//     return response
// })

const ProductsSlice = createSlice({
    name:'products',

    initialState:{
    products:[],
    loading:false,
    error:false,
    },

    reducers:{
        productsStart :(state)=>{
            state.loading= true;
        },
        productsSuccess:(state,action)=>{
            state.loading = false;
            state.products = action.payload;
        },
        productsError : (state)=>{
            state.loading = false;
            state.error = true
        },
    },
})
export const {productsStart,productsSuccess,productsError} = ProductsSlice.actions;
export default ProductsSlice.reducer;