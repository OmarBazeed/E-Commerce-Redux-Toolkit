import React,{Component} from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './components/header';
import ProductDetails from './components/productDetails';
import ProductListing from './components/productListing';
import NotFound from './components/notFound';
import Cart from './components/buttons/cart';
import PersonalDataWithGoogle from './components/personalDataWithGoogle';

class App extends Component {

  render(){

  return (

    <div className="App">
        <BrowserRouter>

            <Header />

            <Routes>
              <Route path="/" element={<ProductListing />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="*" element={<NotFound />} /> 
              <Route path="/cart" element={<Cart />} /> 
              <Route path='/SigninGoogle' element={<PersonalDataWithGoogle />} /> 
            </Routes>
            
        </BrowserRouter>
    </div>

  )

}
}

export default  App;