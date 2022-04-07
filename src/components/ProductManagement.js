import React,{useContext} from 'react'
import {ShopContext} from '../App'
const ProductManagement = () => {
    const {products,selectedProductEditId,handleSelectedProductEditId,handleEditProduct,handleDeleteProduct,selectedProductEdit} = useContext(ShopContext) 
    // console.log(selectedProductId)
   const product = selectedProductEdit(selectedProductEditId,products) 
 const handleChange =(id,changes)=>{
    let product = products.find(p=>p.id===id); 
    // console.log(product)
    let newProduct ={...product,...changes}  
    
    handleEditProduct(id,newProduct)
 }
    return (
    <div className="row">
       
<div className=" bg-info p-2 col-6">

        {products.map(product=>(
            <div key={product.id} className=" d-flex justify-content-between">
         <div className="border  d-flex  text-white" >
            <div className="wrapperImg">
             <img src={product.img} className="imgStyle" alt="" />
            </div>
                <div className="text-center">{product.name}</div>
                <div className=" text-center">{product.price}</div>
         </div>    
            <div>
                <button onClick={()=>handleSelectedProductEditId(product.id)}>Edit</button>
                <button onClick={()=>handleSelectedProductEditId(product.id)}>Delete</button>
            </div>
            </div>
        ))}

</div>
<div className="col-6">
     {product && 
     <div className="bg-info text-white p-2 d-flex flex-column align-items-stretch">
        <div className="wrapperImg">
            <img src={product.img} className="wrapperImg" alt="" />
        </div>
         <div>
         <label htmlFor="name">Name</label>
         <input type="text"  value={product.name} onInput={e=>handleChange(product.id,{name:e.target.value})}/>
         </div>
         <div>

<label htmlFor="price">Price</label>
<input type="number"  value={product.price} onInput={e=>handleChange(product.id,{price:e.target.value})}/>
</div>
     </div>
     }
</div>
    </div>

               

             
      
       
  )
}

export default ProductManagement