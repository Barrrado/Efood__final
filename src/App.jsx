import Cabeçalho from './components/Principalpage/header'
import Main from './components/Principalpage/main'
import Footer from './components/Principalpage/footer'
import { Globalstyle } from './styles/Globalstyle'

function App() {
  return (
    <>
      <Globalstyle />
      <Cabeçalho></Cabeçalho>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
