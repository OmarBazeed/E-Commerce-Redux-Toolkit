import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '.././buttons/cart';

export default function PersonalDataWithGoogle() {

    const {userData} = useSelector(state=>state.product);
    
return (
    <div className='text-center container'>
        { Object.keys(userData).length ?
            (
            <div>
                <p> <strong> Name : </strong> {userData.name} </p>
                <p> <strong> Email : </strong>  {userData.email} </p>
                <img src={userData.picture || '../assests/userphoto.png'} alt='Google_Image' />
            </div>
            )
            :
            null
        }

        <Cart />

    </div>
)
}
