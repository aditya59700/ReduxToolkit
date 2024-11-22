import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from '../features/cake/cakeSlice'

const CakeView = () => {
   const numberOfCakes= useSelector(state => state.cake.numberOfCakes)
   const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes - {numberOfCakes} </h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(restocked(10))}>Restock Cakes</button>
    </div>
  )
}

export default CakeView
