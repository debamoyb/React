import React from 'react';
import { removeProduct } from '../redux/act'
import { useSelector,useDispatch } from 'react-redux';

  
const AddToCart = ({ cart }) => {
    const dispatch=useDispatch()
  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };
      
     const Cart=useSelector((state)=> state.cart)
     console.log(Cart);



  return (
    <div >
      <h2>Cart</h2>
      { Cart?.map((item) => (
        <div key={item.id} className='cart'>
          {/* <p>{item.id}</p> */}
          
          <p>{item.title}</p>
          <img src={item.image} alt=""/>
          <p>{item.price}</p>
          <button onClick={() => handleRemove(item.id)}>Remove Item</button>
        </div>
      ))}
    </div>
  );
};
export default AddToCart