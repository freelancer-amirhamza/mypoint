import Hero from "../components/Hero.tsx"
import Services from "../components/Services"


const Home = () => {
  return (
    <div className=" flex flex-col w-full h-full items-center justify-center">
        <Hero/>
        <Services/>
    </div>
  )
}

export default Home