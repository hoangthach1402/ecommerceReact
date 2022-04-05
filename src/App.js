import React,{useState,useEffect, useRef,useMemo } from "react";
import { createContext } from "react";
import Product from './components/Product'
import Order from './components/Order'
// import second from 'com'
import Cart from './components/Cart'
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
  
  
useEffect(()=>{
    if(selectedProductId!==undefined ){
      const product = products.find(p=>p.id===selectedProductId) 
      setCart([...cart,{...product}]);
    }
  },[selectedProductId])


 

  const shopContextValue={
    handleSelectedProduct,
    handleThanhToan,
  }
  return (
 <ShopContext.Provider value={shopContextValue}>
   <h3>Chao mung {user.name} quay tro lai</h3>
   <div className="container">
   <div className='row'>
   <div className="col-6">
   <div className="row">
   {products.map(product=>(
    <Product key={product.id} product={product}/>
   ))}
   
   </div>
   </div>
   <div className="col-6">
   {(cart.length!==0) && <Cart cart={cart}/>}
   </div>
   </div>
   <div className='bg-info text-white'>
   {thanhtoan && <Order order={cart}/> }
   </div>
   </div> 
 </ShopContext.Provider>
  );
}
const sampleCarts =[
   {id:1,
    name:"dau goi",
    price:20
    },
]
const sampleProducts= [
{id:1,
name:"dau goi",
img:"data:image/jpeg;base64,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",
price:20
},
{id:2,
name:"nuoc rua chen",
img:"data:image/jpeg;base64,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",
price:12
},
{id:3,
name:"nuoc tuong chinsu",
price:27,
img:"data:image/jpeg;base64,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"
},
{
id:4,
name:"bot giat Omo",
price:80,
img:"data:image/jpeg;base64,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"
},
]
const sampleOrders=[
  {id:1,
  userId:1,
  products:[]
  }
]
const sampleUsers=[
{id:1,
name:"thach vu",
orders:[],
},{
id:2,
name:"don iker",
orders:[],
}
]

export default App
// ReactDOM.render(<App />, document.getElementById('root'));