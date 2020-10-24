import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';
import Login from './Images/LoginScreen.PNG';
import InstrDashBoard from './Images/InstructorDashboard.PNG';
import InstrAddClassContent from './Images/InstructorAddClassContent.PNG';
import InstrAddNewClass from './Images/InstructorAddNewClass.PNG';
import InstrViewClass from './Images/InstructorViewClass.PNG';
import InstrViewStd from './Images/InstructorViewStudentList.PNG';
import StdDashboard from './Images/StudentDashboard.PNG';
import StdCourseDashboard from './Images/StudentCourseDashboard.PNG';
import StdCourseAssignment from './Images/StudentCourseAssignment.PNG';

//var testImage = url("https://www.pngmart.com/files/8/Banner-Background-PNG.png");
class ChalkBoardDemo extends Component {
    render() {
        return(
            <div className="content">
                <Grid>
                    <Cell col={12}>
                        <div className="banner-text-demo" style={{background:'url(https://www.pngmart.com/files/8/Banner-Background-PNG.png) center / cover' ,textAlign: 'center'}}>
                            <h1>React Project: ChalkBoard ScreenShots Demo</h1>
                        </div>
                    </Cell>
                </Grid>
                <Grid>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '75%', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{background:"url(" + Login + ") center / cover "}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Log In Screen</CardText>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '75%', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{background:"url(" + InstrDashBoard + ") no-repeat center top/contain", backgroundSize: '100% 100%'}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Instructor Dashboard</CardText>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '75%', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{background:"url(" + InstrAddNewClass + ") no-repeat center top/contain", backgroundSize: '100% 100%'}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Instructor Add New Class</CardText>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '75%', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{background:"url(" + InstrAddClassContent + ") no-repeat center top/contain", backgroundSize: '100% 100%'}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Instructor Add Class Content</CardText>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '75%', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{background:"url(" + InstrViewClass + ") no-repeat center top/contain", backgroundSize: '100% 100%'}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Instructor View Registered Class</CardText>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '75%', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{background:"url(" + InstrViewStd + ") no-repeat center top/contain", backgroundSize: '100% 100%'}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Instructor View Student in a Class</CardText>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '75%', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{background:"url(" + StdDashboard + ") no-repeat center top/contain", backgroundSize: '100% 100%'}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Student Dashboard</CardText>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '75%', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{background:"url(" + StdCourseDashboard + ") no-repeat center top/contain", backgroundSize: '100% 100%'}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Student Course Dashboard</CardText>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '75%', height: '320px', margin: 'auto'}}>
                            <CardTitle expand style={{background:"url(" + StdCourseAssignment + ") no-repeat center top/contain", backgroundSize: '100% 100%'}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Student: Course's Assignment</CardText>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default ChalkBoardDemo;