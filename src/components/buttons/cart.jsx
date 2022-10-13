import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { removeProducFromCart } from '../../redux/oneProductSlice';

export default function Cart() {

const {cartArray,totalCost} = useSelector(state=>state.product);
const dispatch = useDispatch();

const showItems = cartArray.length === 0 ? <p className='text-danger fw-bold text-center'> Your Cart Is Empty ! </p>: cartArray.map(item=>{
    return(
        <div key={Math.random()*20} className='text-center container bg-light p-4 rounded-4 w-50 mb-3'>
            <div className='row align-items-center' >
                <div className='product-info col-md-8 text-start'>
                    <p className='text-secondary fs-5 fw-bold '> Your Item Catageory Is : <br />     
                    <span className='text-warning fw-normal'> {item.title} </span></p>
                    <p className='text-secondary fs-5 fw-bold'> Your Item Price Is : <br />    
                    <span className='text-danger fw-normal fs-4'>{item.price}$ </span> </p>
                    <img src={item.image} alt='...' className='img-fluid img-thumbnail' style={{width:"200px",height:"150px"}} />
                </div>

                <div className='removeItem text-center col-md-4 my-4'>
                    <button className='btn btn-danger' 
                        onClick={()=> 
                        dispatch(removeProducFromCart(item))
                        }> 
                        <FontAwesomeIcon icon ={faDeleteLeft} />
                    </button>
                </div>
            </div>
        </div>
    )
})

return (
        <div className='container'>
            <p className='text-success fs-2 fw-bold text-center'> We Hope You Find What You Want </p>
            <div> {showItems} </div> 
            <hr />
            <hr />
            <div className='text-center fs-3 fw-bold'>
            <p> Total Cost Is : <span className='text-primary'> {totalCost.toFixed(2)} $ </span> </p>
            </div>
        </div>
)
}
