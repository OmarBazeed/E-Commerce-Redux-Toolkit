import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FetchingProduct } from "../redux/productsAction";
import { useEffect } from 'react';

import { addItemsToCart } from "../redux/oneProductSlice";


const ProductDetails = ()=>{

    const {productId} = useParams();

    const { oneProduct,loading ,error } = useSelector(state=> state.product);

    const colors = ['danger','success','secondary','primary','dark'];

    const [randomNOpieces,setRandomNOpieces] = useState( parseInt(Math.random() * 10))

    const dispatch = useDispatch();

    const btnRef = useRef();
    
    useEffect(()=>{
    FetchingProduct(productId,dispatch);
    },[btnRef])
    

return (
    <div className="">
    { loading ? <p className="text-center text-success fs-4 fw-bold"> loading ...</p> : 
        error ? <p className="text-center text-danger fs-4 fw-bold"> OOPS !  Something Went Wrong </p> :
        (
            <div className='container'>
                <div className='card'>
                    <div className='row g-0'>
                            <div className="col-sm-12 col-md-6 col-lg-4 ">
                                    <img src={oneProduct.image} alt='...' className='img-fluid  rounded-start' />
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-8'>
                                <div className='card-body'>
                                    <h3 className='card-text'> {oneProduct.title}</h3>
                                    <p className='text-muted'> {oneProduct.description}</p>
                                    <p className='card-title card-price mb-2 my-3 fw-bold fs-4'> Item Price :   
                                        <span className="fs-5 text-primary"> {oneProduct.price} $ </span>
                                    </p>

                                    <div className="moreDetails">
                                    <p className="fw-bold fs-4"> Available Pieces : 
                                    <span className="fw-bold text-primary fs-5">   {randomNOpieces} </span>
                                    </p>

                                    <p className="fw-bold fs-4"> Available Colors :  <span className="fw-bold text-primary fs-5">
                                    {
                                        
                                            (colors.slice(parseInt(Math.random()*colors.length))).length === 1 ? 
                                            'There Is Only The Shown Color' :  randomNOpieces !== 0 ?
                                            (colors.slice(parseInt(Math.random()*colors.length))).map((el)=>{
                                                return(
                                                    <button 
                                                        className ={`btn btn-${el} mx-2 mb-2`} 
                                                        key={Math.random()}
                                                        onClick={()=> {
                                                            dispatch(addItemsToCart(oneProduct));
                                                            randomNOpieces === 0 ?
                                                            btnRef.current.classList.add("disabled",'opacity-25') : setRandomNOpieces(randomNOpieces - 1);
                                                            randomNOpieces === 1 && btnRef.current.classList.add("disabled",'opacity-25');
                                                        }}
                                                        > 
                                                        {el} 
                                                    </button>
                                                )
                                            }) :
                                            'This Item Is Not Available We Are Working On Providing It Soon '
                                        }
                                        </span>
                                    </p>
                                    </div>

                                    <button 
                                        className='btn btn-outline-success my-3'
                                        ref={btnRef} 
                                        onClick={()=> {
                                            dispatch(addItemsToCart(oneProduct));
                                            randomNOpieces === 0 ?
                                            btnRef.current.classList.add("disabled",'opacity-25') : setRandomNOpieces(randomNOpieces - 1);
                                            randomNOpieces === 1 && btnRef.current.classList.add("disabled",'opacity-25');
                                        }
                                        }>
                                        Add To Chart
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
    </div>
    )
}

export default ProductDetails ;