import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import xMove from './TicTacToe/xmove.PNG';
import oMove from './TicTacToe/omove.PNG';
import xWin from './TicTacToe/xwon.PNG';
import oWin from './TicTacToe/owon.PNG';
import SrvrStart from './ChatApp/ServerStart.png';
import ClientLogin from './ChatApp/ClientLogin.png';
import SrvrSideChat from './ChatApp/ServerSideChat.png';
import ClientSideChat from './ChatApp/ClientSideChat.png';
import StartPostFix from './PostFixJava/EnterPostFix.PNG';
import ResultPostFix from './PostFixJava/ResultPostFix.PNG';
import InputFileNoAvoid from './DijkstraJava/InputFile.PNG';
import InputFileAvoid from './DijkstraJava/InputAvoidB2.PNG';
import OutputFileNoAvoid from './DijkstraJava/OutputNoAvoid.PNG';
import OutputFileAvoid from './DijkstraJava/OutputAvoidB2.PNG';


class projectCardJavaFx extends Component{
    render() {
        return(
            <div>
                <Grid className="project-grid">
                    <Cell col={2}></Cell>
                    <Cell col={8} className="banner-text-demo">
                        <h2 style={{fontWeight: 'bold', textAlign: 'center'}}>Tic Tac Toe</h2>
                        <h5 style={{marginLeft: '2%'}}>COM S 319 - Construction of User Interface</h5>
                        <p style={{margin: '2%'}}>
                            In Spring 2020, the students in the course COM S 319 have been assigned to develop a simple Tic Tac Toe game. 
                            For this task, we were tasked to develop the program using JavaFx, a standard GUI Library. The goal of this 
                            assignment is to learn and develop a software with JavaFx.
                        </p>
                        <p style={{margin: '2%'}}>Link to github: <a href='https://github.com/khairinorizan/JavaRepo/tree/master/JavaFx%20TicTacToe' rel="noopener noreferrer" target="_blank">https://github.com/khairinorizan/JavaFxTicTacToe</a></p>
                        <p style={{margin: '2%'}}>
                            Below are some of the snippets of the program
                        </p>

                        <Grid>
                            <Cell col={6}>
                                <img src={xMove} alt="xmove" className="centering-Image" style={{width: '75%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={oMove} alt="omove" className="centering-Image" style={{width: '75%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                                <img src={xWin} alt="xwin" className="centering-Image" style={{width: '75%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={oWin} alt="owin" className="centering-Image" style={{width: '75%', height: 'auto'}}/>
                            </Cell>
                        </Grid>
                        
                        <hr />

                        <h2 style={{fontWeight: 'bold', textAlign: 'center'}}>Simple Chat Application</h2>
                        <h5 style={{marginLeft: '2%'}}>COM S 319 - Construction of User Interface</h5>
                        <p style={{margin: '2%'}}>
                            In Spring 2020, the students in course, COM S 319, have been assigned to develop a simple chat application. 
                            For this task, we were tasked to develop the program using Java. The goal of this assignment is to learn 
                            and understand how Server Client Thread works. This program demonstrate how many client can be connected to 
                            a Server and communicate with each other.
                        </p>
                        <p style={{margin: '2%'}}>Link to github: <a href='https://github.com/khairinorizan/JavaRepo/tree/master/Server%20Client%20Thread%20(Chat%20App)' rel="noopener noreferrer" target="_blank">https://github.com/khairinorizan/SimpleChatApp</a></p>
                        <p style={{margin: '2%'}}>
                            Below are some of the snippets of the program
                        </p>

                        <Grid>
                            <Cell col={6}>
                                <img src={SrvrStart} alt="Server Start" className="centering-Image" style={{width: '75%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={ClientLogin} alt="Client Login" className="centering-Image" style={{width: '75%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                                <img src={SrvrSideChat} alt="Server Side Chat" className="centering-Image" style={{width: '75%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={ClientSideChat} alt="Client Side Chat" className="centering-Image" style={{width: '75%', height: 'auto'}}/>
                            </Cell>
                        </Grid>

                        <hr />

                        <h2 style={{fontWeight: 'bold', textAlign: 'center'}}>PostFix Calculator</h2>
                        <h5 style={{marginLeft: '2%'}}>COM S 228 - Data Structures in JAVA</h5>
                        <p style={{margin: '2%'}}>
                            In Fall 2019, the students in course, COM S 228, have been assigned to develop a postfix calculator program. 
                            This assignment consist three parts; A LinkedList, Deque, and the Postfix Calculator. The goal of this assignment 
                            is to learn and understand how the two data structure works, LinkedList and Deque.                             
                        </p>
                        <p style={{margin: '2%'}}>                            
                            The postfix calculator program was built based on Deque data structure, while Deque was built based on the LinkedList. 
                            Unlike a normal doubly-LinkedList, this Amusing Linked List works in a very interesting way, where, forward links in 
                            the list link to the next node in the list but the last node is linked to the first node. For previous links, each node 
                            are only valid for nodes at even indexes of the list.
                        </p>
                        <p style={{margin: '2%'}}>Link to github: <a href='https://github.com/khairinorizan/JavaRepo/tree/master/PostFixCalculator%20w%20Linked%20List' rel="noopener noreferrer" target="_blank">https://github.com/khairinorizan/JavaPostFixCalculator</a></p>
                        <p style={{margin: '2%'}}>
                            Below are some of the snippets of the program
                        </p>

                        <Grid>
                            <Cell col={6}>
                                <img src={StartPostFix} alt="Start PostFix" className="centering-Image" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={ResultPostFix} alt="PostFix Result" className="centering-Image" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                        </Grid>

                        <hr />

                        <h2 style={{fontWeight: 'bold', textAlign: 'center'}}>Graph: Find Shortest Path</h2>
                        <h5 style={{marginLeft: '2%'}}>COM S 228 - Data Structures in JAVA</h5>
                        <p style={{margin: '2%'}}>
                            In Fall 2019, the students in course, COM S 228, have been assigned an individual assignment to develop a program 
                            to find the shortest path from point A to point B. Therefore, for this assignment we were task to implement a graph data structure 
                            to solve the problem. 
                        </p>
                        <p style={{margin: '2%'}}>
                            Generally, for this assignment, we need to read an input file which have all the location points. The input file were also provided with 
                            two person location, Peggy and Sam. The goal for this assignment is to find the the shortest path for Peggy getting to Sam, and vice versa.
                        </p>
                        <p style={{margin: '2%'}}>Link to github: <a href='https://github.com/khairinorizan/JavaRepo/tree/master/ShortestPathGraph' rel="noopener noreferrer" target="_blank">https://github.com/khairinorizan/GraphShortestPath</a></p>
                        <p style={{margin: '2%'}}>
                            Below are some of the snippets of the program
                        </p>

                        <Grid>
                            <Cell col={6}>
                                <img src={InputFileNoAvoid} alt="Input No Avoid" className="centering-Image" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={OutputFileNoAvoid} alt="Output No Avoid" className="centering-Image" style={{width: '95%', height: '100%'}}/>
                            </Cell>
                            <Cell col={6}>
                                <img src={InputFileAvoid} alt="Input Avoid" className="centering-Image" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={OutputFileAvoid} alt="Output Avoid" className="centering-Image" style={{width: '95%', height: '100%'}}/>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell col={2}></Cell>
                </Grid>
            </div>
        );
    }
}

export default projectCardJavaFx;