import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProWorkExp from './proWorkExp';
import ClubActivites from './clubActivities';
import Project from './resumeProjects';
import ProfilePic from './Images/ProfPic.png';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid className="resume-grid">
                    <Cell className="resume-left-col" col={5}>
                        <div style={{textAlign: 'center'}}>
                            <img src={ProfilePic} alt="avatar" className="avatar-img"/>
                            <h3 style={{paddingTop: '2em'}}>Muhammad Khairi Norizan</h3>
                        </div>
                        

                        <h3>Education</h3>
                        <hr style={{borderTop: '3px solid #e22947', width: '75%'}}/>
                        <p style={{ width: '100%', margin: 'auto'}}>Iowa State University of Science and Technology, Ames, Iowa, USA</p>
                        <p style={{ width: '100%', margin: 'auto'}}>Bachelor of Science in Software Engineering</p>
                        <p style={{ width: '100%', margin: 'auto'}}>Expected Graduation: December 2021</p>

                        <br/>
                        <p style={{ width: '100%', margin: 'auto'}}>University College Poly-Tech MARA, Kuala Lumpur, Malaysia</p>
                        <p style={{ width: '100%', margin: 'auto'}}>Diploma in Computer Science</p>
                        <p style={{ width: '100%', margin: 'auto'}}>Graduation: May 2014</p>

                        <br/>
                        <h3>Computer Skills</h3>
                        <hr style={{borderTop: '3px solid #e22947', width: '75%'}}/>
                        <h5>Languages</h5>
                        <p style={{ width: '100%', margin: 'auto'}}>C/C++, JAVA, HTML/CSS, JavaScript, SQL, C#, PHP</p>
                        <h5>Frameworks</h5>
                        <p style={{ width: '100%', margin: 'auto'}}>ReactJs, Bootstrap, Angular, NodeJs, JSP, ASP.NET</p>
                        <h5>Softwares</h5>
                        <p style={{ width: '100%', margin: 'auto'}}>Microsoft Visual Studio, Microsoft Visual Code, Eclipse, MySQL, GIT, Microsoft (Word, PowerPoint, Excel, Access, Publisher)</p>
                    </Cell>
                    <Cell className="resume-right-col" col={7}>
                        <h2>Professional Work Experiences</h2>
                        <ProWorkExp
                            startYear="July 2014"
                            endYear="May 2016"
                            jobTitle="Full-time, Front-end Junior Developer"
                            workPlace="@ Cardtrend System by Edenred"
                            workDescription=
                            {[
                                "Engage in various phases of Software Development Life Cycle (SDLC) including building, testing, and deployment",
                                "Worked jointly with front-end developers and back-end developers on two web application projects; Petronas Fleet System and Petron Philippine Fleet System",
                                "Responsible for designing, refining, develop, and maintaining web applications using mostly ASP.NET, C#, HTML/CSS, JavaScript, Bootstrap, and Angular",
                                "Resolved software bugs related to front-end for the undertaken projects during the testing phase and live phase"
                            ]}
                        />
                        <ProWorkExp
                            startYear="Jan 2014"
                            endYear="May 2014"
                            jobTitle="Internship, Network Specialist"
                            workPlace="@ SIRIM Berhad, Shah Alam"
                            workDescription=
                            {[
                                "Worked closely with Tridimas, SIRIM’s vendor, to install Avaya switches in the building",
                                "Accurately and effectively input IP addresses into all the new switches",
                                "Install modems and router around the environment, and ensure internet connection are provided",
                                "Diagnose internet connection inside the SIRIM environment and provide trouble shooting with follow up advise"
                            ]}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Other Work Experiences</h2>
                        <ProWorkExp
                            startYear="Jan 2017"
                            endYear="Current"
                            jobTitle="Part-time, Dining Room Attendant"
                            workPlace="@ Hawthorn, ISU Dining"
                            workDescription=
                            {[
                                "Working in a team with effectively used time management skills in order to complete task",
                                "Served as a team member to prepare and serve individuals customer orders as requested in a timely manner"
                            ]}
                            
                        />
                        <ProWorkExp
                            startYear="Dec 2009"
                            endYear="May 2010"
                            jobTitle="Part-time, Retail Store Assistant"
                            workPlace="@ SUB, Midvalley Megamall"
                            workDescription=
                            {[
                                "Greet and give warm welcome to customers and ascertain each customer wants and needs",
                                "Responsible for opening and closing cash register, and processing cash and card payments",
                                "Responsible for security within the store and being on the look out for shoplifters and fraudulent; credit cards etc"
                            ]}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Club Activities and Involvement</h2>
                        <ClubActivites
                            startYear="Fall 2018"
                            endYear="Spring 2019"
                            clubPlace="Association of Malaysian Student in Iowa State University"
                            clubTitle="Program Director"
                            clubDescription=
                            {[
                                "Led a team of more than 40 students to coordinate Malaysian Cultural Night 2019",
                                "Advocated diversity and inclusion on campus by collaborating with domestic students through performances"
                            ]}
                            
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Projects</h2>
                        <Project
                            startYear="March"
                            endYear="May (Spring 2020)"
                            projPlace="COMS 319: Construction of User Interface"
                            projTitle="Student Portal: ChalkBoard"
                            projDescription=
                            {[
                            "Learning platform designed to provide instructors and students with single robust, secure and integrated system to create personalized learning environment", 
                            "Back-end development uses MySQL as a database system and Spring Boot to connect to the database",
                            "Responsible for front-end development; develop and design user interface for both students and instructors with ReactJs, Bootstrap, and Angular",
                            "Front-end uses Axios to submit and retrieve request from the back-end"
                            ]}
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume