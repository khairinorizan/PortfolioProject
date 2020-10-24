import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class clubActivities extends Component {
    render() {
        const getDesc = this.props.clubDescription;
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px', marginBottom: '5px'}}>{this.props.clubPlace}</h4>
                    <h5 style={{marginTop: '0px', marginBottom: '5px'}}>{this.props.clubTitle}</h5>
                    <ul style={{paddingLeft:'1.2em'}}>
                    {
                        getDesc.map((desc)=>(
                            <li>{desc}</li>
                        ))
                    }
                    </ul>
                </Cell>
            </Grid>
        );
    }
}

export default clubActivities;