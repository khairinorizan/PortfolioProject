import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import SixHun140 from './CommonFactorsC/600140.PNG';
import FiveHun200 from './CommonFactorsC/500200.PNG';
import HashTableInput1 from './HashTable/Input1.PNG';
import HashTableInput2 from './HashTable/Input2.PNG';
import HashTableOutput2 from './HashTable/Output2.PNG';
import HashTableOutput1 from './HashTable/Output1.PNG';

class projectCardC extends Component{
    render() {
        return(
            <div>
                <Grid className="project-grid">
                    <Cell col={2}></Cell>
                    <Cell col={8} className="banner-text-demo">
                        <h2 style={{fontWeight: 'bold', textAlign: 'center'}}>Find Common Factor</h2>
                        <h5 style={{marginLeft: '2%'}}>COM S 327 - Advanced Programming Techniques</h5>
                        <p style={{margin: '2%'}}>
                            In Spring 2020, the students in COMS 327 course have been assigned an individual assignment. For this assignment, 
                            the program should be able to read in two integer numbers and find the factors of each integer. On top of that, 
                            the program also need to find the common factors of those integers.
                        </p>
                        <p style={{margin: '2%'}}>Link to github: <a href='https://github.com/khairinorizan/CRepository/tree/master/Common%20Factors' rel="noopener noreferrer" target="_blank">https://github.com/khairinorizan/CommonFactors</a></p>
                        <p style={{margin: '2%'}}>
                            Below are some of the snippets of the program
                        </p>

                        <Grid>
                            <Cell col={6}>
                                <img src={SixHun140} alt="600 140 Common Factors" className="centering-Image" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={FiveHun200} alt="500 200 Common Factors"  className="centering-Image" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                        </Grid>
                        
                        <hr />

                        <h2 style={{fontWeight: 'bold', textAlign: 'center'}}>Hash Table of Strings</h2>
                        <h5 style={{marginLeft: '2%'}}>COM S 327 - Advanced Programming Techniques</h5>
                        <p style={{margin: '2%'}}>
                            In Spring 2020, the students in COMS 327 course have been assigned an individual assignment. For this assignment, 
                            we were task to write a that reads from standard input one word per line. After the input has been consumed, the program 
                            needs to display the hash table (counts and words) to the standard output.
                        </p>
                        <p style={{margin: '2%'}}>Link to github: <a href='https://github.com/khairinorizan/PortfolioProject' rel="noopener noreferrer" target="_blank">https://github.com/khairinorizan/ePortFolio</a></p>
                        <p style={{margin: '2%'}}>
                            Below are some of the snippets of the program
                        </p>

                        <Grid>
                            <Cell col={6}>
                                <img src={HashTableInput1} alt="Hash Table Input 1" className="centering-Image" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={HashTableOutput1} alt="Hash Table Output 1" className="centering-Image" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                                <img src={HashTableInput2} alt="Hash Table Input 2" className="centering-Image" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                            <Cell col={6}>
                            <img src={HashTableOutput2} alt="Hash Table Output 2" className="centering-Image" style={{width: '95%', height: 'auto'}}/>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell col={2}></Cell>
                </Grid>
            </div>
        );
    }
}

export default projectCardC;