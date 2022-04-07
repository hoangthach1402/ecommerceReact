import React,{useContext,useState}  from 'react'
import {ShopContext} from '../App'
const Order = () => {
  const   [user,setUser] =useState()
  const [order,setOrder] =useState(); 
  
  const {carts,users,orders} = useContext(ShopContext) 
    
  const handleSelectUser =(id)=>{
     setUser(users.find(user => user.id === id)) 
    }
      
    // console.log(user)
    const handleSubmit =()=>{
      console.log()
      console.log('submit')
    }
  return (
    <div>
      <select name="" id="" onChange={(e)=>handleSelectUser(e.target.value)}>
        <option value="" >select user</option>
        {users.map(user =>(
        <option key={user.id}   value={user.id}>{user.name}</option>  
        ))}
      </select>
     <button onClick={handleSubmit}>submit Order</button>
    </div>
  )
}

export default Order