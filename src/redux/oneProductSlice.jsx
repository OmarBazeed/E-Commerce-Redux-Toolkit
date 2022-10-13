import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name:'product',

    initialState:{
    oneProduct:{},
    loading:false,
    error:false,
    cartArray: [],
    totalCost : 0,
    userData:{}
    },

    reducers:{
        productStart :(state)=>{
            state.loading= true;
        },
        productSuccess:(state,action)=>{
            state.loading = false;
            state.oneProduct = action.payload;
        },
        productError : (state)=>{
            state.loading = false;
            state.error = true
        },
        addItemsToCart:(state,action)=>{
            state.cartArray.push(action.payload);
            state.totalCost = state.totalCost + action.payload.price
        },
        removeProducFromCart :(state,action)=>{
        const newArr = state.cartArray.filter((el)=> el.id !== action.payload.id);
        state.cartArray = newArr;
        state.cartArray.length === 0 ? state.totalCost = 0 : state.totalCost = state.totalCost - action.payload.price;
        },
        modifyUser:(state,action)=>{
            console.log(action.payload);
            state.userData = action.payload
        }
    },

})
export const {productStart,productSuccess,productError,addOneProduct,addItemsToCart,removeProducFromCart,modifyUser } = ProductSlice.actions;
export default ProductSlice.reducer;