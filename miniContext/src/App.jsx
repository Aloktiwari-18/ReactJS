import Profile from './components/Profile'
import Login from './components/Login'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with hitesh chaoudhary</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
