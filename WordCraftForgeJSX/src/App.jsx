import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GenerateAssessment from "./GenerateAssessment"
import { assessmentTypes } from "./constants/AssesmentTypes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GenerateAssessment userData={assessmentTypes}/>
    </>
  )
}

export default App
