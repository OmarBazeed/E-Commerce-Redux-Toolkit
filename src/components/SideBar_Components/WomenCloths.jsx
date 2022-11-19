import { faArrowRight, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemsToCart } from '../../redux/oneProductSlice';

import products from '../JSON_Files/WomenCloths.json';

const WomenCloths = () => {
  const {loading,error} = useSelector(state => state.allProducts);
  const dispatch = useDispatch();

  const handleAdd= (e)=>{
      dispatch(addItemsToCart(e));
  }

  const showProducts = loading ? <p className="text-center text-success fs-4 fw-bold"> loading ...</p> :(products.map((el)=>{
      return(
          <div key={el.id}  className='cole-xs-12 col-md-6 col-lg-4 col-xl-3 mb-4 mainDiv'>
              <div className="card">
                  <img src={el.url} alt="..." className="img-fluid img-thumbnail myCardImage" style={{height:'470px'}}/>

                  <div className="card-body">
                      <p className="card-text text-capitalize">{(el.title).slice(0,30)}</p>
                      <p className="text-light fw-bold fs-4 productPrice text-center">{el.price} $</p>

                      <Link to={`/women-cloths/${el.id}`} className='text-decoration-none' >
                      <button className="btn btn-outline-secondary detailsBtn"> Details  <FontAwesomeIcon icon={faArrowRight} />  </button>
                      </Link>

                      <div className="float-end">
                          <button className="btn btn-outline-primary " onClick={()=> handleAdd(el)}> <FontAwesomeIcon icon={faCartPlus} /> Add </button>
                      </div>

                  </div>
              </div>
          </div>
      )
  })
  )

  return (
      <React.Fragment>
          <div className="container">
                  <div className="row justify-content-around align-items-center">
                      {
                          error ? <p className="text-center text-secondary fs-4 fw-bold"> Error Here ... You May Be Offline So Check Your Connection And Try Again </p> : showProducts
                      }
                  </div>
          </div>
      </React.Fragment>
  )
}

export default WomenCloths