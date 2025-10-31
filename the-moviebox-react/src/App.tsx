import { MovieContent } from "./cases/movies/components/movie-content"
import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { Navbar } from "./components/layout/navbar"

function App() {

  return (
    <>
    <Header></Header>
    <main>
      <Navbar></Navbar>
      <MovieContent></MovieContent>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
