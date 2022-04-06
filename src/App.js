import React,{useState,useEffect, useRef,useMemo } from "react";
import { createContext } from "react";
import Product from './components/Product'
import Order from './components/Order'
import Home from './components/Home'
import {sampleProducts,sampleOrders,sampleUsers,sampleCarts} from './components/data.js'
import Cart from './components/Cart'
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from 'uuid';
import ProductManagement from './components/ProductManagement'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

export const  ShopContext = createContext()

function App() {
  const [thanhtoan,setThanhtoan] =useState(false) ;
  const [selectedProductId,setSelectedProductId] =useState() ;
  const [cart,setCart] = useState([]);
  const [products,setProducts] =useState(sampleProducts);
  const [orders,setOrders] = useState(sampleOrders);
  const [users,setUsers] = useState(sampleUsers);
  const [user,setUser] = useState({id:1,
    name:"thach vu",
    orders:[],
    })
  const handleSelectedProduct =(id)=>{
    setSelectedProductId(id)
   
  }
  const handleThanhToan =()=>{
  // console.log('tt')
  setThanhtoan(true);
  }
  const getAllProductsContext =(products)=>{
    // console.log(products)
    return  products ;
    
  }
   
useEffect(()=>{
   
  if(selectedProductId!==undefined ){
      const product = products.find(p=>p.id===selectedProductId) 
      setCart([...cart,{...product}]);
    }
  },[selectedProductId])

  useEffect(()=>{
    let getproducts = products  ;

    // console.log(getproducts)
    getAllProductsContext(getproducts)
},[])

 

  const shopContextValue={
    handleSelectedProduct,
    handleThanhToan,
    getAllProductsContext,

  }
  return (
 <ShopContext.Provider value={shopContextValue}>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productmanagement" element={ProductManagement} />
      </Routes>

    <Link to={"/productmanagement"}>Product Management</Link> 
    <Link to={"/"}>Home</Link>
   </BrowserRouter>
      

   
 </ShopContext.Provider>
        


      

  
  );
}

export default App
// ReactDOM.render(<App />, document.getElementById('root'));