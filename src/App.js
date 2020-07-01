import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Contact from './Pages/contact'
import Principal from './Pages/principal'
import Error404 from './Components/404/404'
import Register from './Pages/register'
import Login from './Pages/login'
import Testv from './Pages/testv'
import Careers from './Pages/careers'
import '../src/App.css'
import ResumePage from './Asessments/resume'
import WelcomePage from './Asessments/welcome'
import Grafico from './Pages/grafico'

const App = () => {
    const body = (
        <React.Fragment>
            <div id="body">
                <Switch>
                    <Route exact path='/'>
                        <Principal />
                    </Route>
                    <Route exact path='/register'>
                        <Register />
                    </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/test-vocacional'>
                        <Testv />
                    </Route>
                    <Route exact path='/carreras1'>
                        <Careers />
                    </Route>
                    <Route exact path='/grafico'>
                        <Grafico />
                    </Route>
                    <Route exact path='/contact' render={() => {
                        return (
                            <Contact />
                        )
                    }} />
                    <Route exact path='/asessments/welcome'>
                        <WelcomePage />
                    </Route>
                    <Route exact path='/asessments/resume'>
                        <ResumePage />
                    </Route>
                    <Route component={Error404} />
                </Switch>
            </div>
        </React.Fragment>
    )

    const initial = (
        <div className='App'>
            {body}
        </div>
    )

    return (
        <React.Fragment>
            {initial}
        </React.Fragment>
    )
}

export default withRouter(App)