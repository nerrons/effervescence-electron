// deps
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// containers
import AboutPage from './AboutPage'
import Effercescence from './Effervescence'
import SettingsPage from './SettingsPage'
import './css/tailwind.css'
import './css/iosevka.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className='font-iosevka'>
        <Switch>
          <Route path='/about'>
            <AboutPage />
          </Route>

          <Route path='/settings'>
            <SettingsPage />
          </Route>

          <Route path='/'>
            <Effercescence />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
