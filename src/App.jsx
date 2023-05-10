import { useState } from 'react'

import UserList from './UserList'
import useUserStore from './UserStore'
import Layout from './components/layout';
import { CssBaseline } from '@mui/material';

import LoginPage from './pages/login'
import ProfilePage from './pages/profile'
import RegisterPage from './pages/register'
import ProductPage from './pages/products'
import ProductsPage from './pages/products'
import HomePage from './pages/home'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  const users = useUserStore(state => state.users);

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='profile' element={<ProfilePage />} />
        </Route>
      </Routes>

      <h1>Vite + React</h1>
      <UserList />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
