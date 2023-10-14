import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup'
import AppBar from './Appbar.jsx'
import SignIn from './SignIn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      width : "100vw",
      height : "100vh",
      backgroundColor : "#eeeeee"
    }}>
      <AppBar></AppBar>
      <Router>
      <Routes>
        <Route path="/login" element={<SignIn/>} />
        <Route path="/signup" element={<Signup/>} />

      </Routes>
    </Router>
    </div>
    
  )
}


export default App
