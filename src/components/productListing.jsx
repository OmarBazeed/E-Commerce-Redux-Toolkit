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
            <div className="th-ProductListing">

                <ProductComponent />

            </div>
        )
}

export default ProductListing ;