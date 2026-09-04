import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import Header from './components/Header'
import MainPage from './pages/MainPage'
import DashBoard from './pages/DashBoard'
import SignUp from './pages/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './components/ProtectedRoute'

const App = (props) => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/TasksPage' element={
            <ProtectedRoute>
              <DashBoard/>
            </ProtectedRoute>
            }/>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
