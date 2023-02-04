import Login from './pages/Login'
import Landing from './pages/Landing'
import Register from './pages/Register'
import styled from 'styled-components'
import Welcome from './pages/Welcome'
import Start from './pages/Start'
import Board from './pages/Board'

import PrivateRoute from './pages/PrivateRoute'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <PrivateRoute exact path='/welcome'>
            <Welcome />
          </PrivateRoute>
          <PrivateRoute exact path='/start'>
            <Start />
          </PrivateRoute>
          <PrivateRoute exact path='/board'>
            <Board />
          </PrivateRoute>
          <Route path='*'>
            <Landing />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  )
}

const Wrapper = styled.div`padding: 10px;`

export default App
