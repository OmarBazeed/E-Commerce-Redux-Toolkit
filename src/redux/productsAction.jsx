import axios from "axios";
import { productsStart,productsSuccess,productsError } from "./productsSlice"
import {productStart,productSuccess,productError} from './oneProductSlice'

export const FetchingProducts = async (dispatch)=>{
    dispatch(productsStart());
    
    try{
    const response = await axios.get('https://fakestoreapi.com/products').then(res => res.data);
    dispatch(productsSuccess(response))
    }catch(err){
        dispatch(productsError())
    }
}


export const FetchingProduct = async (id,dispatch)=>{
    dispatch(productStart());
    
    try{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`).then(res => res.data);
    dispatch(productSuccess(response))
    }catch(err){
        dispatch(productError())
    }
}