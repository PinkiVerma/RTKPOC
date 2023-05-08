import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ordered, restocked} from './cakeSlice'

export const CakeView = () => {
  const noOfCakes = useSelector((state)=>state.cake.numberOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
    <h2>Number of Cakes - {noOfCakes}</h2>
    <button onClick={()=>dispatch(ordered())}>Order cake</button>
    <button onClick={()=>dispatch(restocked(5))}>Restock cake</button>
    </div>
  )
}
