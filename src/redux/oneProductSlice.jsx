import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name:'product',

    initialState:{
    oneProduct:{},
    loading:false,
    error:false,

    // Checkig If There Are cartArry And Price Are Stored In The LocalStorage To Use Them Or Put The Default Values For The cartArray And The Cost
    cartArray:  localStorage.getItem('selectedThings')? JSON.parse(localStorage.getItem('selectedThings')) :  [],
    totalCost : localStorage.getItem('totalCost') ? +localStorage.getItem('totalCost') : 0,
    
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
            state.totalCost = state.totalCost + action.payload.price;
            
            // Storing The cartArray In The localStorage With Every Change In It To Re-call It Again , Also Storing The Total Price 
            localStorage.setItem('selectedThings',JSON.stringify(state.cartArray));
            localStorage.setItem('totalCost',state.totalCost);
        },
        removeProducFromCart :(state,action)=>{
            const newArr = state.cartArray.filter((el)=> el.id !== action.payload.id);
            state.cartArray = newArr;
            state.cartArray.length === 0 ? state.totalCost = 0 : state.totalCost = state.totalCost - action.payload.price;

            // Storing The cartArray In The localStorage With Every Change In It To Re-call It Again , Also Storing The Total Price 
            localStorage.setItem('selectedThings',JSON.stringify(state.cartArray));
            localStorage.setItem('totalCost',state.totalCost);
        },
        modifyUser:(state,action)=>{
            console.log(action.payload);
            state.userData = action.payload
        }
    },

})
export const {productStart,productSuccess,productError,addOneProduct,addItemsToCart,removeProducFromCart,modifyUser } = ProductSlice.actions;
export default ProductSlice.reducer;