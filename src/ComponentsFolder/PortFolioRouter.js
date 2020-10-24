
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Project from './project';
import Resume from './resume';
import ChalkboardDemo from './ChalkBoardDemo';

const PortFolioRouter = () => (
    <Switch>
        <Route exact path='/' component={LandingPage}></Route>
        <Route path='/AboutMe' component={AboutMe}></Route>
        <Route path='/Contact' component={Contact}></Route>
        <Route path='/MyProject/ChalkBoard' component={ChalkboardDemo}></Route>
        <Route path='/MyProject' component={Project}></Route>
        <Route path='/Resume' component={Resume}></Route>
    </Switch>
)
// class PortFolioRouter extends Component{
//     render(){
//         return (
//             <BrowserRouter>
//                     <Switch>
//                         <Route exact path='/' component={LandingPage}></Route>
//                         <Route path='/AboutMe' component={AboutMe}></Route>
//                         <Route path='/Contact' component={Contact}></Route>
//                         <Route path='/MyProject' component={Project}></Route>
//                         <Route path='/Resume' component={Resume}></Route>
//                     </Switch>
//             </BrowserRouter>
//         );
//     }
// }

export default PortFolioRouter;