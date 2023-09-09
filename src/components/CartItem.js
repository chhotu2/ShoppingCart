import React from 'react'
import {FcDeleteDatabase} from "react-icons/fc"

import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("Item remove Sucess")
  }
  return (
    <div className='  flex justify-center items-center'>
      <div className="">
        <img src={item.image} className='  h-[300px] w-[189px]'/>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-300 mt-1">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal w-400 text-[10px] text-center">{item.description}</h1>
        <div>
          <p className='text-gray-700 font-semibold text-lg ml-10 truncate w-300 mt-1'>${item.price}</p>
          <div onClick={removeFromCart} className=''>
          <FcDeleteDatabase className='text-5xl ml-10'/>
        </div>
        </div>
      </div>

      
        
      </div>
    </div>
  )
}

export default CartItem
