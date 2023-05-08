import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ordered, restocked} from './icecreamSlice'


export const IcecreamView = () => {
  const numberOfIcecream = useSelector((state)=>state.icecream.numberOfIcecream)
  const dispatch = useDispatch()

  return (
    <div>
    <h2>Number of ice-cream -{numberOfIcecream} </h2>
    <button onClick={()=>dispatch(ordered())}>Order icecream</button>
    <button onClick={()=>dispatch(restocked(5))}>Restock icecream</button>
    
    </div>
  )
}
