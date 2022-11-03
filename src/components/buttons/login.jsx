// اللهم لك الحمد كما ينبغى لجلال وجهك و عظيم سلطانك
// الحمد لله حمداً ملئ السموات و الارض 
// الحمد لله حمدا طيباً مباركاً فيه 
// الحمد لله حمداً كثيراً
// الحمد لله حمداً تطيب به النفوس
// الحمد لله عدد ما كان و عدد ما يكون و عدد الحركات و السكون 
// الحمد لله حتى ترضى و الحمد لله عند الرضى و الحمد لله بعد الرضى 
// اللهم لك الحمد حمداً كثيراً طيباً مباركاً فيه
// الحمد لله حتى يبلغ الحمد منتهاه
// اللهم انى استودعك ما حفظت و ما قرات و ما كتبت و ما فهمت امانه و وديعه عندك و اسالك ان ترده على عند حاجتى اليه فانت حسبى و نعم الوكيل
// الحمد لله دائماً و ابداً


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect , useState } from 'react';
import { faFacebook  , faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons"

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { modifyUser } from '../../redux/oneProductSlice';
import jwt_decode from "jwt-decode";

export default function Login({play,notplay}) {

    const [user , setUser] = useState({});
    const dispatch = useDispatch();

    const google = window.google;

    const handleCallbackResponse = (response)=> {
        var userObj = jwt_decode(response.credential);
        setUser(userObj);
        document.getElementById('googleSingin')?.remove();
    }

    useEffect(()=>{

            google.accounts.id.initialize({
                client_id:"152058930850-fg571of7buitm7cfas1kt5ev81veams2.apps.googleusercontent.com",
                callback: handleCallbackResponse,
            });

            google.accounts.id.renderButton(
                document.getElementById("googleSingin"),
                {theme:'outline', size:'large'}
            );

            google.accounts.id.prompt();
    },[])

return (
    <>
    {
    !play ? null : (
    <div className="overlay p-2" id="exampleModal">
            <div className="modal-content">

                <div className="modal-header mb-2">
                <h5 className="modal-title text-center text-primary fs-4" id="exampleModalLabel">Login Info</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ ()=> notplay(false) }></button>
                </div>

                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text text-primary">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        
                        <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-outline-success w-100">Submit</button>
                    </form>


                        <hr />
                        <hr />
                        <div className='parent' >
                        {
                            Object.keys(user).length ?
                            (
                            <NavLink 
                                className='btn btn-outline-primary text-center w-100 mb-2 d-flex justify-content-between' 
                                to='/SigninGoogle' 
                                onClick={()=>{
                                    dispatch(modifyUser(user))
                                }}
                                >

                                <div id='googleSingin'> </div>
                                {
                                    Object.keys(user).length ? (<p> Click Here : {user.name} </p>) : null
                                }

                                { Object.keys(user).length ? 
                                    (<button onClick={()=>setUser({})} className='btn btn-outline-dark signOut'>sign out</button>) : null
                                }
                            </NavLink>
                            )
                            :
                            ( <button
                                    className='btn btn-outline-primary w-100 mb-2' 
                                    onClick={()=>{
                                        dispatch(modifyUser(user))
                                    }}> 
                                    <FontAwesomeIcon  icon={faGoogle}/> Google
                                </button>)
                        }

                        </div>
                        <button className='btn btn-outline-secondary w-100 mb-2'> <FontAwesomeIcon  icon={faFacebook}/> Facebook</button>
                        <button className='btn btn-outline-danger w-100 mb-2'> <FontAwesomeIcon  icon={faInstagram}/> Instagram</button>

                </div>

            </div>
    </div>

    )
}
</>
)
}

