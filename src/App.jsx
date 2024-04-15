import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';

import './App.css'
import Nav from './components/Nav/Nav'
import Custom404 from './pages/Custom404/Custom404'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Nav />

        <Routes>
          {/* <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/display' element={<Single />} />
          <Route path='*' element={<Custom404 />} /> */}
          <Route path='*' element={<Custom404 />} />
        </Routes>

      </div>
    </>
  )
}

export default App
