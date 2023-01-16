import { Alert } from 'react-bootstrap';
import React from 'react'
import { useRef } from 'react';
import { useState , useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from '../../authContext/AuthContext';

const Signup = () => {

const {signup} = useContext(authContext);
const [error , setError] = useState('');
const [loading , setLoading] = useState(false);
const emailRef = useRef();
const passwordRef = useRef();
const passwordConfirmationRef = useRef();
const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmationRef.current.value){return setError('passwords do not match')}

        try{
            setError(false);
            setLoading(true);
            await signup(emailRef.current.value , passwordRef.current.value);
            navigate('/dashboard');
        }catch(error){
            setError('Failed To Sign Up')
        }
        setLoading(false)

    }

return (
    <React.Fragment>

        <div className='container d-flex justify-content-center align-items-center flex-column' style={{minHeight:'calc(100vh - 120px)'}} >
        
            <div className="card dashboardCard">
                <div className="card-body">
                    <h3 className="card-title text-center">Sign Up</h3>

                    {error && <Alert variant='danger'> {error}</Alert>}

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password"  ref={passwordRef} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3">
                        <label className="form-label" htmlFor="exampleInputPassword2">Password Confirmation</label>
                        <input type="password"  ref={passwordConfirmationRef} className="form-control" id="exampleInputPassword2" />
                        </div>

                        <button type="submit" className="btn btn-primary form-control" disabled={loading}>Sign Up</button>

                    </form>
                </div>
            </div>
            <div className='mt-3'>
            Already Have An Account ? <Link to='/login'>log in</Link>
            </div>
        
        </div> 
    
    </React.Fragment>
)
}

export default Signup