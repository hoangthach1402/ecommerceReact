import React,{useContext,useEffect} from 'react'
import {ShopContext} from '../App'
import Product from './Product'
const Home = () => {
   const {getAllProductsContext} = useContext(ShopContext) 

        console.log(getAllProductsContext)
        const {products} = getAllProductsContext ;
      

    console.log(products)

    return (
    <div className='container'>
{/* {products.map(product=>(
    <h1>{product.name}</h1>
))} */}

    </div>
  )
}

export default Home

{/* <div className="container">
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
</div>  */}