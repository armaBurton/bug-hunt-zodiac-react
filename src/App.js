import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import { zodiac } from '../../data.js'

function App() {
  return (
    <h1>Header</h1>
    <div className="App">
      <Header />
      <Main items={zodiac}/>
      <Footer />
    </div>
  )
}

export default App
