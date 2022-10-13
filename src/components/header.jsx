import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Login from "./buttons/login";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const Header = ()=>{

    const random = parseInt(Math.random() * 20);

    const [open , setOpen] = useState(false);

    const {cartArray} = useSelector(state=>state.product);

    const menuRef = useRef();


    return (
<>
<nav className="navbar navbar-expand-lg bg-light MainHeader px-3">

    <div className="container-fluid linksParent">
        <a className="navbar-brand fw-bold fs-3 text-light text-capitalize" href="www.google.com"> <span className="text-danger fs-2 animate">C</span>loths <span className="text-danger fs-2 animate">S</span>tore 2022</a>

        <button  className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={open} aria-label="Toggle navigation" onClick={(e)=>{
            setOpen(true);
            menuRef.current.classList.toggle("show");
            e.stopPropagation();
        }}>
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={menuRef}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-3">
                <NavLink className="nav-link fs-5 text-danger" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item me-3">
                <NavLink className="nav-link fs-5 text-danger" to="*">Contact</NavLink>
                </li>
                <li className="nav-item me-3">
                <NavLink className="nav-link fs-5 text-danger" to="/gfnfg">Help</NavLink>
                </li>
                <li className="nav-item me-3">
                <NavLink className="nav-link fs-5 text-danger" to={`/product/${random}`}>Product</NavLink>
                </li>
            </ul>
        </div>
    </div>

    <NavLink to='/cart'>
    <button className='btn btn-outline-primary myCart me-2'>
    <FontAwesomeIcon icon={faCartShopping} /> Cart ({cartArray.length}) </button>
    </NavLink>

    <button className="btn btn-outline-primary myLogin" onClick={(e)=> {
        setOpen(true);
        e.stopPropagation();
    } }> 
    <FontAwesomeIcon icon={faRightToBracket} /> Login</button>
    <Login open={open} close={setOpen} />

</nav>


</>
)
}

export default Header ;