import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Food from './components/Food.tsx'
import Card from './components/Card.tsx'
import Button from './components/Button.jsx'
import MonsterSearch from './components/MonsterSearch.tsx'


function App() {
  return(
    <>
      <Header/>
      <MonsterSearch/>
      <Button/><Button/><Button/>
      <Food/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Footer/>
    
    </>
        
  );
}

export default App