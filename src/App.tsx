import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

export function App() {
  return (
    <div className='max-w-[70rem] mx-auto'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

