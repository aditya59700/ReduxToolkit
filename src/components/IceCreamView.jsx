import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered,restocked } from '../features/icecream/icecreamSlice'

const IceCreamView = () => {
  const numberOfIceCreams = useSelector(state => state.icecream.numberOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
       <h2>Number of Ice Creams - {numberOfIceCreams}</h2>
        <button onClick={() => dispatch(ordered())} >Order Ice Cream</button>
        <button onClick={() => dispatch(restocked(10))}>Restock Ice Creams</button>
    </div>
  )
}

export default IceCreamView
