import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/register/Register';
import Home from './pages/Home/Home'
import './style.scss'
import {BrowserRouter , Routes , Route, Navigate} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from './components/context/AuthContext';

function App() {
  const {currentUser} = useContext(AuthContext)
  
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'> 
        {/* <Route index element={currentUser?<Home/> : <Login/>}/> */}
        <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        {/* <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}/> */}
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
