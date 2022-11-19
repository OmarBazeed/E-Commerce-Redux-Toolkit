import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';

const SideBar = () => {

    const  handleClickClose = ()=>{
        document.querySelector('.sideBarButton2').classList.toggle('hide');
        document.querySelector('.sideBarButton1').classList.toggle('SHow');
        document.querySelector('.sideBar').style.transform='translateX(-200px)';
        document.querySelector('.sideBar').style.display='none';

    }
    const handleClickOpen =()=>{
        document.querySelector('.sideBarButton2').classList.toggle('hide');
        document.querySelector('.sideBarButton1').classList.toggle('SHow');
        document.querySelector('.sideBar').style.transform='translateX(0px)';
        document.querySelector('.sideBar').style.display='block';
    }

useEffect(()=>{
        document.querySelectorAll('.list-item').forEach((ele)=>{
            ele.addEventListener('mouseenter',()=>{
                ele.style.letterSpacing='2px';
                ele.style.filter='drop-shadow(1px 1px 5px white)';
            })
        })

        document.querySelectorAll('.list-item').forEach((ele)=>{
            ele.addEventListener('mouseleave',()=>{
                ele.style.letterSpacing='0';
                ele.style.filter='none';
            })
        })
})

    return (
<React.Fragment>

    <button className="btn btn-outline-info rounded-circle sideBarButton2" onClick={handleClickOpen}>
    <FontAwesomeIcon icon={faBars}  />
    </button>

    <div className="sideBar" style={{width:'200px',color:'black',marginTop:'-20px',transform:'translateX(-200px)',display:'none'}}>
        <div className='SideBar-Content'>
            <div className='text-end mb-1'>
                <button className="btn btn-outline-danger rounded-circle sideBarButton1 hide text-end" onClick={handleClickClose}>
                    <FontAwesomeIcon icon={faClose}  spin />
                </button>
            </div>
            <ul className="list-group">
                <li className="list-item">
                    <Link to='/'> Home</Link>
                </li>
                <li className="list-item">
                    <Link to='/men-cloths'> Men Cloths</Link>
                </li>
                <li className="list-item">
                    <Link to='/women-cloths'> Women Cloths</Link>
                </li>
                <li className="list-item">
                    <Link to='kids-cloths'> Kids</Link>
                </li>
                <li className="list-item">
                    <Link to=''> Search</Link>
                </li>
            </ul>
        </div>
    </div>
</React.Fragment>
)
}

export default SideBar