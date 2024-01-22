import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Createuser } from './pages/Createuser'
import { Deposit } from './pages/Deposit'
import { Withdrawl } from './pages/Withdrawl'
import { Balance } from './pages/Balance'
import { Alldata } from './pages/Alldata'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={ <Login/> } />
      <Route path='/createuser' element={ <Createuser/> } />
      <Route path='/deposit' element={ <Deposit/> } />
      <Route path='/withdrawl' element={ <Withdrawl/> } />
      <Route path='/balance' element={ <Balance/> } />
      <Route path='/alldata' element={ <Alldata/> } />
    </Routes>
  )
}

export default App
