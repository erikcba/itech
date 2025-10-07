import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Stock from './pages/Stock'
import Clientes from './pages/Clientes'

function App() {

  return (
    <Routes>
      <Route path='/' element={
        <MainLayout>
          <Home />
        </MainLayout>} />
      <Route path='/stock' element={
        <MainLayout>
          <Stock />
        </MainLayout>} />
      <Route path='/clientes' element={
        <MainLayout>
          <Clientes />
        </MainLayout>} />

    </Routes>
  )
}

export default App
