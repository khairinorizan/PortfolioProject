import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfilePic from './Images/ProfPic.png';

class Landing extends Component {
    render() {
        return(
            <div style={LandingPageProperty}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={ProfilePic} alt="avatar" className="avatar-img"/>

                        <div className="banner-text">
                            <h1>Muhammad Khairi Norizan</h1>
                            <p>DOB: July 22, 1992 | Kuala Lumpur, Malaysia </p>
                            <p style={{marginBottom: '2px'}}>Junior in Software Engineering @ Iowa State University</p>
                            <p style={{marginTop: '0px'}}>Expected Graduation: December 2021</p>
                            <hr/>
                            {/* <h3>Computer Skill Set</h3>
                            <p> HTML/CSS | JavaScript | React | NodeJS | C/C++</p> */}

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/khairinorizan/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/khairinorizan" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

const LandingPageProperty = {
    width: '100%',
    height: '100%',
    margin: 'auto'
}

export default Landing