
import './App.css'
import { Route,Routes } from 'react-router-dom'
import {Layout} from './components/index'
import {IndexPage} from './pages/index'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>          
      </Route>

    </Routes>
     
    </>
  )
}

export default App
