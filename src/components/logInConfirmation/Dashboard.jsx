import React, { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../authContext/AuthContext';
import Cart from '../buttons/cart';

const Dashboard = () => {

  const {currentUser , logOut } = useContext(authContext);
  const [error , setError] = useState('');

const handleLogout = async()=>{

  try{
    setError('')
    await logOut();
  }catch{
  setError('Failed To Log Out');
  }

}

  return (
    <React.Fragment>

    <div className='container d-flex flex-column align-items-center' style={{minHeight:'calc(100vh - 120px)'}} >
    
        <div className="card" style={{maxWidth:'380px'}}>
            <div className="card-body">
                <h3 className="card-title text-center">Sign Up</h3>
                {error && <Alert variant='danger'>{error}</Alert>}

                <strong>Email : </strong> {currentUser && currentUser.email}

                <Link  to='/update-profile' className="btn btn-primary form-control my-3" >Update Profile</Link>
            </div>
        </div>

        <div className='my-3'>
          <Link  to='/login'  className='btn btn-primary' onClick={handleLogout}> Log Out </Link>
        </div>
        
        <div>
          <Cart />
        </div>
    
    </div> 

</React.Fragment>
  )
}

export default Dashboard