import { useState } from 'react'
import './App.css'
import { Auth } from './components/auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Auth />
    </div>
  )
}

export default App
