import styled from 'styled-components'
import Aboutsection from './components/Aboutsection'
import Contact from './components/Contact'
import Herosection from './components/Herosection'
import Work from './components/Work'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {

  return (
    <>
      <Container>
        <Herosection />
        <Aboutsection />
        <Work />
        <Contact />
      </Container>
    </>
  )
}

export default App
