import './App.css'
import Photo from './Photo.jsx'
import React from "react"
import Title from "./Title.jsx"
import EmailButton from "./EmailButton.jsx"
import MainContent from "./MainContent.jsx"

function App() {

  return (
    <div className="App">
      <Photo />
      <Title />
      <EmailButton />
      <MainContent />
    </div>
  )
}

export default App
