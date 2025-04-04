import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black rounded-excel p-4'>Tailwind Test</h1>
     <Card/>
     <Card  username="Chai aur Code"/>
    </>
  )
}

export default App


// har ek tag closing tag hona chahiye

