import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './buttons/cart';

export default function PersonalDataWithGoogle() {

    const {userData} = useSelector(state=>state.product);
return (
    <div className='text-center'>
        { Object.keys(userData).length ?
            (
            <div>
                <p> {userData.name} </p>
                <p> {userData.email} </p>
                <img src={userData.picture} alt='Google_Image' />
            </div>
            )
            :
            null
        }

        <Cart />

    </div>
)
}
