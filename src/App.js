import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import Contact from './Pages/contact';
import Principal from './Pages/principal';
import Error404 from './Components/404/404';
import Register from './Pages/register';
import Login from './Pages/login';
import Testv from './Pages/testv';
import Careers from './Pages/careers';
import '../src/App.css';
import ResumePage from './Asessments/resume';
import Reportes from './Pages/reports/index';
import ProfileContact from './Pages/contact/profile'
import Explorer from './Pages/explore/index';
import Career from './Pages/explore/details/resume.js';
import Contactar from './Pages/contact/index';
import Asessment from './Asessments/test/test';
import ValidatorScreen from './Pages/verification';
import PrivateRoute from "./common/PrivateRoute";
import ForgetPassword from "./Pages/forget-password";
import FullPage from './Asessments/test/test'
import { loadUser } from './actions/auth';
import store from './store';
import Videollamada from './Pages/videollamada';

const WelcomePage = lazy(() => import('./Asessments/welcome'));
const renderLoader = () => {
    return (
        <div className='container text-center' style={{paddingTop: 250}}>
        <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs

        />
        </div>
    )
}

const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    const body = (
        <React.Fragment>
                <Suspense fallback={renderLoader}>
                    <Switch>
                        <Route exact path='/'>
                            <Principal />
                        </Route>
                        <Route exact path='/register'>
                            <Register />
                        </Route>
                        <Route path='/validator/:email' 
                            render={(props) => {
                                return <ValidatorScreen {...props}></ValidatorScreen>
                            }
                        }>
                        </Route>
                        <Route exact path='/forget-password' component={ForgetPassword}/>
                        <Route exact path='/login'>
                            <Login />
                        </Route>
                        <Route exact path='/test-vocacional'>
                            <Testv />
                        </Route>
                        <Route exact path='/carreras'>
                            <Careers />
                        </Route>
                        <Route exact path='/videollamada'>
                            <Videollamada/>
                        </Route>
                        <Route exact path='/contact' render={() => {
                            return (
                                <Contact />
                            )
                        }} />
                        <Route exact path='/asessments/reports' component={Reportes} />
                        <Route path='/asessments/exam' component={FullPage} />
                        <Route exact path='/asessments/welcome' component={WelcomePage} />
                        <Route exact path='/asessments/resume' component={ResumePage} />
                        <Route exact path='/asessments/explore' component={Explorer} />
                        <Route exact path='/asessments/career' component={Career} />
                        <Route exact path='/asessments/contact' component={Contactar} />
                        <Route exact path='/contact/profile' component={ProfileContact} />
                        <Route component={Error404} />
                    </Switch>
                </Suspense>
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