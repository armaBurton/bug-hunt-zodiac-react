import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import { zodiac } from './data.js'

function App() {
  return (
    <div>
      <h1>Header</h1>
      <div className="App">
        <Header />
        <Main zodiac={zodiac} />
        <Footer />
      </div>
    </div>
  )
}

export default App
