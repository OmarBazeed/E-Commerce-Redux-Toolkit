import React, { useContext, useRef, useState } from 'react'
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../authContext/AuthContext';

const ForgotPassword = () => {

    const {forgotPassword} = useContext(authContext);
    const [error , setError] = useState('');
    const [message , setMessage] = useState('');
    const [loading , setLoading] = useState(false);
    const emailRef = useRef();


    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
                setError(false);
                setLoading(true);
                setMessage('Check Your Inbox To Reset Your Password')
                await forgotPassword(emailRef.current.value);
        }catch(error){
                setError('Failed To Reset Password')
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
                {message && <Alert variant='success'> {message}</Alert>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" className="btn btn-primary form-control" disabled={loading}>Reset Password</button>
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

export default ForgotPassword