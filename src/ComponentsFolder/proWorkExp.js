import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class proWorkExp extends Component {   

    render() {
        const getDesc = this.props.workDescription;
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px', marginBottom: '5px'}}>{this.props.jobTitle}</h4>
                    <h5 style={{marginTop: '0px', marginBottom: '5px'}}>{this.props.workPlace}</h5>
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

export default proWorkExp;