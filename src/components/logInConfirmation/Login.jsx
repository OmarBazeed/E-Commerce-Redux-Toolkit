import React, { useContext, useRef, useState } from 'react'
import { Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../authContext/AuthContext';

const Login = () => {

const {login} = useContext(authContext);
const [error , setError] = useState('');
const [loading , setLoading] = useState(false);
const emailRef = useRef();
const passwordRef = useRef();
const location = useLocation();
const redirectPath = location.state?.path || '/dashboard';
const navigate = useNavigate();

const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            setError(false);
            setLoading(true);
            await login(emailRef.current.value , passwordRef.current.value);
            navigate(redirectPath);
        }catch(error){
            setError('Failed To Log In')
        }
        setLoading(false)
}

  return (
    <React.Fragment>

    <div className='container d-flex justify-content-center align-items-center flex-column' style={{minHeight:'calc(100vh - 120px)'}} >
    
        <div className="card dashboardCard">
            <div className="card-body">
                <h3 className="card-title text-center">Log In</h3>

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

                    <button type="submit" className="btn btn-primary form-control" disabled={loading}>Log In</button>

                    <div className='text-center my-3'>
                      <Link to='/forgot-password' > Forgot Password </Link>
                    </div>
                </form>
            </div>
        </div>
        <div className='mt-3'>
        Need An Account ? <Link to='/signup'>Sign Up</Link>
        </div>
    
    </div> 

</React.Fragment>
  )
}

export default Login