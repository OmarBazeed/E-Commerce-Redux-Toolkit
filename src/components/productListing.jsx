import React from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./productComponent";
import {FetchingProducts} from "../redux/productsAction";
import { useEffect } from "react";




const ProductListing = ()=> {

    const dispatch = useDispatch();

    useEffect( ()=>{
        FetchingProducts(dispatch);
    },[])

    return (
<React.Fragment>

            <ProductComponent />

</React.Fragment>
)
}

export default ProductListing ;