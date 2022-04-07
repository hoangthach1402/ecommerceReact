import React,{useState,useEffect, useRef,useMemo } from "react";
import './App.css'
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
import OrderManagement from './components/OrderManagement'
export const  ShopContext = createContext()

function App() {
  const [dark,setDark] = useState(false); 



  const [thanhtoan,setThanhtoan] =useState(false) ;
  const [selectedProductEditId,setSelectedProductEditId] = useState() ;
  const [selectedProductId,setSelectedProductId] =useState() ;
  const [carts,setCarts] = useState([]);
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
  const selectedProduct =(id,products)=>{
    return   products.find(p=>p.id===id);
  }
  const selectedProductEdit =(id,products)=>{
    return products.find(p=>p.id===id);
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
      setCarts([...carts,{...product,quantity:+1,id:uuidv4()}]);
    }
  },[selectedProductId])
      

  useEffect(()=>{
    let getproducts = products  ;

    // console.log(getproducts)
    // getAllProductsContext(getproducts)
},[])

   const handleSelectedProductEditId = (id)=>{
    setSelectedProductEditId(id);
   }
  const handleEditProduct =(id,product)=>{
    let newProducts = [...products] ;
     const index = products.findIndex(p=>p.id===id); 
     newProducts[index] = product ;
     setProducts(newProducts)
  }
  const handleDeleteProduct=(id)=>{
     let newProducts = products.filter(p=>p.id!==id) 
     setProducts(newProducts); 
  }
  const handleCart =(carts)=>{
    setCarts(carts);
  }
  const shopContextValue={
    handleSelectedProduct,
    handleThanhToan,
    getAllProductsContext,
    products,
    selectedProductId,
    selectedProduct,
    carts,
    thanhtoan,
    handleEditProduct,
    handleDeleteProduct,
    handleCart,
    selectedProductEditId,
    handleSelectedProductEditId,
    selectedProductEdit
  }

  
  return (
   <BrowserRouter>

 <ShopContext.Provider value={shopContextValue}>
    
    <Link to="/productmanagement" >Product Management</Link> 
    <Link to="/" >Home</Link>
    <Link to="/ordermanagement">Order Management </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ordermanagement" element={<Home />} />
        <Route path="/productmanagement" element={<ProductManagement />} />
      </Routes>
 </ShopContext.Provider>
   </BrowserRouter>
      

   
        


      

  
  );
}

export default App
// ReactDOM.render(<App />, document.getElementById('root'));