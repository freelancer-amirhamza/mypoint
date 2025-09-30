import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"


const App = () => {
  return (
    <>
    <Header />
    <main className="h-full">
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default App
