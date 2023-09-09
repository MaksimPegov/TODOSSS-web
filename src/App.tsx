import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
  BrowserRouter,
} from 'react-router-dom'
import { LeftMan } from './assets/BackroundMen/LeftMan'
import { RightMan } from './assets/BackroundMen/RightMan'
import { WelcomePage } from 'welcome/WelcomePage'

export const App = () => {
  const location = useLocation()

  return (
    <div className="App">
      <LeftMan />
      <Routes location={location} key={location.pathname}>
        <Route path="/welcome-page" element={<WelcomePage />} />
        <Route path="/*" element={<Navigate to="/welcome-page" />} />
      </Routes>
      <RightMan />
    </div>
  )
}
