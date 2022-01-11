import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { useState } from 'react';

import GlobalStyle from './globalStyles';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'
import CheckLoggedHabits from './Pages/Habits/Habits';
import CheckLoggedToday from './Pages/Today/Today';
import CheckLoggedHistory from './Pages/History/History';
import UserContext from './Context/Context';


function App() {
  const UserData = JSON.parse(localStorage.getItem('userInfo'));
  const [userInfo, setUserInfo] = useState({...UserData});
  const [dayProgress, setDayProgress] = useState(0);
  const [logged, setLogged] = useState(false);

  return (
    <BrowserRouter >
      <UserContext.Provider value={
          {userInfo, setUserInfo, dayProgress, setDayProgress, logged, setLogged}
        }>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/cadastro' element={<Register/>} />
          <Route path='/habitos' element={<CheckLoggedHabits/>} />
          <Route path='/hoje' element={<CheckLoggedToday/>} />
          <Route path='/historico' element={<CheckLoggedHistory/>} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;