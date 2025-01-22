import './App.css'
import Footer from './components/Footer'
import GoToTop from './components/GoTOTOP'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
    <Navbar/>
    <GoToTop/>
    </div>
  )
}

export default App
