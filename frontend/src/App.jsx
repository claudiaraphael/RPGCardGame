import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Profile.tsx'
import MonsterSearch from './components/MonsterSearch.tsx'
import MonsterCard from './components/MonsterCard.jsx'

// the App component is the root component of the application. It renders the other components: Header, MonsterSearch, Button, Card, and Footer, in a specific order. The Header component is rendered first, followed by the MonsterSearch component, then the Button component, then the Card component, and finally the Footer component. This structure allows for a clear and organized layout of the application.
function App() {
  return(
    <>
      <Header/>
      <MonsterSearch/>
      <MonsterCard/>
      <Card/>
      <Footer/>
    </>
  );
}

export default App