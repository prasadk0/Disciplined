import { useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import GoToTop from './components/GoTOTOP'
import store from "../src/redux/store"
import Navbar from './components/Navbar'
import Login from './components/Login'
import { Provider, useSelector } from 'react-redux'
import RegisterPage from './components/RegisterPage'

function App() {
 const loggedIn = useSelector((state) => state.habit.loggedIn);
 const registered = useSelector((state) => state.habit.registered);
 console.log(loggedIn,"------------------------")
  return (
    <div className='flex flex-col min-h-screen'>
    {loggedIn ? <Navbar/> :  registered ? <RegisterPage/> : <Login/>}
    <GoToTop/>
    </div>
  )
}

export default App
