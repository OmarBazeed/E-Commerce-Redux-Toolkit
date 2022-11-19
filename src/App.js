import React,{Component} from 'react';
import { Routes , Route } from 'react-router-dom';
import Header from './components/Home_Components/header';
import SideBar from './components/Home_Components/SideBar';
import ProductDetails from './components/Home_Components/productDetails';
import ProductListing from './components/Home_Components/productListing';
import NotFound from './components/Home_Components/notFound';
import Cart from './components/buttons/cart';
import PersonalDataWithGoogle from './components/Home_Components/personalDataWithGoogle';
import Contact from './components/Home_Components/Contact';

// Adding Authentication Components To The Bsic Routes Of The App ==> Route For Each Element (افضل حاجه انهم تيعملوا فى التطبيق من برا خالص و ليس جوا كومبوننت معين و جواه شويه رووتس)
import Login from './components/logInConfirmation/Login';
import Signup from './components/logInConfirmation/Signup';
import Logout from './components/logInConfirmation/Logout';
import ForgotPassword from './components/logInConfirmation/ForgotPassword';
import UpdateProfile from './components/logInConfirmation/UpdateProfile';
import Dashboard from './components/logInConfirmation/Dashboard';
import RequiredAuth from './authContext/RequiredAuth';
import MenCloths from './components/SideBar_Components/MenCloths';
import WomenCloths from './components/SideBar_Components/WomenCloths';
import  KidsCloths  from './components/SideBar_Components/KidsCloths';
import MenClothsOneProduct from './components/SideBar_Components/MenClothsOneProduct';
import WomenClothsOneProduct from './components/SideBar_Components/WomenClothsOneProduct';
import KidsClothsOneProduct from './components/SideBar_Components/KidsClothsOneProduct';


class App extends Component {

render(){

return (

    <div className="App">

            <Header />

            <div className='mainBody d-flex' >
                <SideBar />

                <Routes>
                    {/* Home Components*/}
                    <Route path="/" element={<ProductListing />} />
                    <Route path="/product/:productId" element={<ProductDetails />} />
                    <Route path="*" element={<NotFound />} /> 
                    <Route path="/cart" element={<Cart />} /> 
                    <Route path='/SigninGoogle' element={<PersonalDataWithGoogle />} />
                    <Route path='/contact' element={<Contact />} />

                    {/* Side Bar Components*/}
                    <Route path='/men-cloths' element={<MenCloths />} />
                    <Route path='/men-cloths/:productId' element={<MenClothsOneProduct />} />
                    <Route path='/women-cloths' element={<WomenCloths />} />
                    <Route path='/women-cloths/:productId' element={<WomenClothsOneProduct />} />
                    <Route path='/kids-cloths' element={<KidsCloths />} />
                    <Route path='/kids-cloths/:productId' element={<KidsClothsOneProduct />} />

                    {/* Sign-In And Confirmation Components*/}
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