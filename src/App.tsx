import { Routes, Route } from 'react-router-dom'
import Users from './pages/Users'
import Index from './pages/Index'

function App() {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/" element={<Index />} />
    </Routes>
  )
}

export default App