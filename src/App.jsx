import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import {Outlet} from 'react-router-dom'
function App() {
 

  return (
    <>
   <Header/>
   <Outlet/>      {/* we can not directly use app inside the router  so that we have used Outlet here. It is a placeholder for nested routes */}
   <Footer/>
   
    </>
  )
}

export default App
