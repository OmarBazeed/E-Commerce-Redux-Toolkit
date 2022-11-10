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
            <div className="d-flex">

                <div className="sideBar" style={{width:'200px',height:'100vh',background:'black',color:'white',marginTop:'-20px'}}>
                    <ul>
                        <li> one</li>
                        <li> one</li>
                        <li> one</li>
                        <li> one</li>
                        <li> one</li>
                    </ul>
                </div>
                <div className="ProductsBody w-100">
                    <ProductComponent />
                </div>

            </div>
        )
}

export default ProductListing ;