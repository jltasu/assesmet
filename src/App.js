import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import Contact from './Pages/contact';
import '../src/App.css';
import ResumePage from './Asessments/resume';
import Reportes from './Pages/reports/index';
import ProfileContact from './Pages/contact/profile'
import Explorer from './Pages/explore/index';
import Career from './Pages/explore/details/resume.js';
import Contactar from './Pages/contact/index';
import FormContact from './Pages/videollamada'
// import Asessment from './Asessments/test/test';
import ValidatorScreen from './Pages/verification';
<<<<<<< HEAD
// import PrivateRoute from "./common/PrivateRoute";
import ForgetPassword from "./Pages/forget-password";
=======
import PrivateRoute from "./common/PrivateRoute";
>>>>>>> 4ee67a8227d0db348507cf01c66671831e1f8423
import FullPage from './Asessments/test/test'
import { loadUser } from './actions/auth';
import store from './store';
import Videollamada from './Pages/videollamada';
import ParallaxResult from './Pages/reports/parallax-result';

const WelcomePage = lazy(() => import('./Asessments/welcome'));
const Principal = lazy(() => import('./Pages/principal'));
const Login = lazy(() => import('./Pages/login'));
const Register = lazy(() => import('./Pages/register'));
const Error404 = lazy(() => import('./Components/404/404'));
const ForgetPassword = lazy(() => import('./Pages/forget-password'));
const Testv = lazy(() => import('./Pages/testv'));
const Careers = lazy(() => import('./Pages/careers'));

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
                        <Route exact path='/asessments/results' component={ParallaxResult} />
                        <Route exact path='/asessments/welcome' component={WelcomePage} />
                        <Route exact path='/asessments/resume' component={ResumePage} />
                        <Route exact path='/asessments/explore' component={Explorer} />
                        <Route exact path='/asessments/career' component={Career} />
                        <Route exact path='/asessments/contact' component={Contactar} />
                        <Route exact path='/contact/profile' component={ProfileContact} />
                        <Route exact path='/contact/profile/llamada' component={FormContact} />
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