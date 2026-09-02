import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import Header from './components/Header'
import MainPage from './pages/MainPage'
import DashBoard from './pages/DashBoard'
import SignUp from './pages/SignUp'

const App = (props) => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/TasksPage' element={<DashBoard/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
