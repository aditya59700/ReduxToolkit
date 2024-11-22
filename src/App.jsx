import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeView from './components/CakeView'
import IceCreamView from './components/IceCreamView'
import UserView from './components/UserView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux</h1>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  )
}

export default App
