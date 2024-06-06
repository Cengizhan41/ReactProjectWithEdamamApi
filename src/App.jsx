import EdamamRoutes from './Components/EdamamRoutes'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'



function App() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <EdamamRoutes/>     
      </div>
      <Footer/>
    </div>
  )
}

export default App
