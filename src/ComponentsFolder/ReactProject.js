import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Login from './Images/LoginScreen.PNG';
import InstrDashBoard from './Images/InstructorDashboard.PNG';
import StdDashboard from './Images/StudentDashboard.PNG';
import StdCourseDashboard from './Images/StudentCourseDashboard.PNG';
import ePortFolioHome from './eportFolioSS/home.PNG';
import ePortFolioResume from './eportFolioSS/resume.PNG';
import ePortFolioProject from './eportFolioSS/project.PNG';
import ePortFolioContact from './eportFolioSS/contact.PNG';

class projectCardReact extends Component{
    render() {
        return(
            <div>
                <Grid>
                    {/* <Cell col={2}></Cell> */}
                    <Cell col={8} offset={2} className="banner-text-demo">
                        <h2 style={{fontWeight: 'bold', textAlign: 'center'}}>ChalkBoard</h2>
                        <h5 style={{marginLeft: '2%'}}>COM S 319 - Construction of User Interface</h5>
                        <p style={{margin: '2%'}}>
                            In Spring 2020, my teammates and I have came up with an idea to develop a student portal for the course
                            COMS 319. The goal for this project is to develop a dynamic website using ReactJs that ables to interact between 
                            the front-end and the back-end. Hollistically, the software goal is to provide the technology, tools, and 
                            support to meet the specific needs of instructor to create classes and insert new material into a class, and to structure 
                            the app for registered students to access and submit any materials for the class.
                        </p>
                        <p style={{margin: '2%'}}>Link to github: <a href='https://github.com/khairinorizan/GroupComS319ChalkBoard' rel="noopener noreferrer" target="_blank">https://github.com/khairinorizan/Chalkboard</a></p>
                        <p style={{margin: '2%'}}>
                            Below are some of the snippets of the program
                        </p>

                        <Grid>
                            <Cell col={6}>
                                <img src={Login} alt="Login Screen" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={InstrDashBoard} alt="Instructor Dashboard" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                                <img src={StdDashboard} alt="Student Dashboard" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={StdCourseDashboard} alt="Student Course Dashboard" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                        </Grid>
                        
                        <hr />

                        <h2 style={{fontWeight: 'bold', textAlign: 'center'}}>e-PortFolio</h2>
                        <h5 style={{marginLeft: '2%'}}>Summer 2020 - Personal Project</h5>
                        <p style={{margin: '2%'}}>
                            In Summer 2020, I have came up with an idea to develop an e-PortFolio. This ePortfolio is a collection of work (evidence) in an 
                            electronic format that showcases learning over time. The goal for this project is to learn and improve my skill in ReactJs framework. 
                            This project is a static website, which means it does not interact with a database. However, in this project, I have demonstrated my 
                            knowledge in deploying it live to the web.
                        </p>
                        <p style={{margin: '2%'}}>Link to github: <a href='https://github.com/khairinorizan/PortfolioProject' rel="noopener noreferrer" target="_blank">https://github.com/khairinorizan/ePortFolio</a></p>
                        <p style={{margin: '2%'}}>
                            Below are some of the snippets of the program
                        </p>

                        <Grid>
                            <Cell col={6}>
                                <img src={ePortFolioHome} alt="Home Screen" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={ePortFolioResume} alt="Resume Screen" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                                <img src={ePortFolioProject} alt="Project Screen" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={ePortFolioContact} alt="Contact Screen" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                        </Grid>
                    </Cell>
                    {/* <Cell col={2}></Cell> */}
                </Grid>
            </div>
        );
    }
}

export default projectCardReact;