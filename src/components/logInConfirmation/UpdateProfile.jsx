import React, { useContext, useRef, useState } from 'react'
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../authContext/AuthContext';

const UpdateProfile = () => {

const {currentUser , updateUserEmail , updateUserPassword} = useContext(authContext);
const [error , setError] = useState('');
const [loading , setLoading] = useState(false);
const emailRef = useRef();
const passwordRef = useRef();
const passwordConfirmationRef = useRef();
const navigate = useNavigate();


const handleSubmit =(e)=>{
  e.preventDefault();

  if(passwordRef.current.value !== passwordConfirmationRef.current.value){ return setError('passwords do not match')}

  const promises = [];
  setError('')
  setLoading(true);

  if(currentUser.email !== emailRef.current.value ){
    promises.push(updateUserEmail(emailRef.current.value))
  }
  if(passwordRef.current.value){
    promises.push(updateUserPassword(passwordRef.current.value))
  }

  Promise.all(promises).then(()=>{navigate('/dashboard')}).catch(()=>{setError('Failed To Update Profile')}).finally(()=>{setLoading(false)})

}


  return (
    <React.Fragment>

    <div className='container d-flex justify-content-center align-items-center flex-column' style={{minHeight:'calc(100vh - 120px)'}} >
    
        <div className="card" style={{minWidth:'400px'}}>
            <div className="card-body">
                <h3 className="card-title text-center">Update Profile</h3>

                {error && <Alert variant='danger'> {error}</Alert>}

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={currentUser.email} />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password"  ref={passwordRef} className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                    <label className="form-label" htmlFor="exampleInputPassword2">Password Confirmation</label>
                    <input type="password"  ref={passwordConfirmationRef} className="form-control" id="exampleInputPassword2" />
                    </div>

                    <button type="submit" className="btn btn-primary form-control" disabled={loading}>Update</button>

                </form>
            </div>
        </div>

        <div className='mt-3'>
          <Link to='/dashboard'>Cancel</Link>
        </div>
    
    </div> 

</React.Fragment>
  )
}

export default UpdateProfile