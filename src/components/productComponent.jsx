import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const ProductComponent = ()=>{

    const {products,loading,error} = useSelector(state => state.allProducts);

    const showProducts = loading ? <p className="text-center text-success fs-4 fw-bold"> loading ...</p> :( products.map((el)=>{
        return(
            <div key={el.id}  className='cole-xs-12 col-md-6 col-lg-6 col-xl-4 mb-4 mainDiv'>
                <Link to={`/product/${el.id}`} className='text-decoration-none' >
                        <div className="card">
                                <img src={el.image} alt="..." className="img-fluid img-thumbnail myCardImage" style={{height:'470px'}}/>
                                <div className="card-body">
                                        <p className="card-text text-secondary">{el.title}</p>
                                        <p className="card-title text-primary fw-bold fs-2">{el.price}$</p>
                                        <button className="btn btn-outline-secondary"> 
                                        <FontAwesomeIcon icon={faCircleInfo} /> More Details </button>
                                </div>
                        </div>
                </Link>
            </div>
        )
    })
    )

    return (
        <div className="th-productComponent">
            <div className="container">
                    <div className="row justify-content-around align-items-center">
                        {
                            error ? <p className="text-center text-secondary fs-4 fw-bold"> Error Here ... You May Be Offline So Check Your Connection And Try Again </p> : showProducts
                        }
                    </div>
            </div>
        </div>
    )
}

export default ProductComponent ;