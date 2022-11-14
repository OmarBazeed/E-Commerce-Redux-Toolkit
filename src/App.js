import React,{Component} from 'react';
import { Routes , Route } from 'react-router-dom';
import Header from './components/header';
import SideBar from './components/SideBar';
import ProductDetails from './components/productDetails';
import ProductListing from './components/productListing';
import NotFound from './components/notFound';
import Cart from './components/buttons/cart';
import PersonalDataWithGoogle from './components/personalDataWithGoogle';


// Adding Authentication Components To The Bsic Routes Of The App ==> Route For Each Element (افضل حاجه انهم تيعملوا فى التطبيق من برا خالص و ليس جوا كومبوننت معين و جواه شويه رووتس)
import Login from './components/logInConfirmation/Login';
import Signup from './components/logInConfirmation/Signup';
import Logout from './components/logInConfirmation/Logout';
import ForgotPassword from './components/logInConfirmation/ForgotPassword';
import UpdateProfile from './components/logInConfirmation/UpdateProfile';
import Dashboard from './components/logInConfirmation/Dashboard';
import RequiredAuth from './authContext/RequiredAuth';


class App extends Component {

render(){

return (

    <div className="App">

            <Header />

            <div className='mainBody d-flex' >
                <SideBar />

                <Routes>
                    <Route path="/" element={<ProductListing />} />
                    <Route path="/product/:productId" element={<ProductDetails />} />
                    <Route path="*" element={<NotFound />} /> 
                    <Route path="/cart" element={<Cart />} /> 
                    <Route path='/SigninGoogle' element={<PersonalDataWithGoogle />} />

                    <Route path='/login' element={<Login />}  />
                    <Route path='/signup' element={<Signup />}  />
                    <Route path='/logout' element={<Logout />}  />
                    <Route path='/forgot-password' element={<ForgotPassword />}  />
                    <Route path='/update-profile' element={<UpdateProfile />}  />
                    <Route path='/dashboard' exact element={ <RequiredAuth> <Dashboard /> </RequiredAuth>}  />
                </Routes>
            </div>
            
    </div>

)

}
}

export default  App;