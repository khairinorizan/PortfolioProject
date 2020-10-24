import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import ProfilePic from './Images/ProfPic.png';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Muhammad Khairi Norizan</h2>
                        <img src={ProfilePic} alt="avatar" className="avatar-img"/>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Current Address:</p>
                        <p style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '1em', marginBottom: '1px'}}>1905 Long Rd, Unit 129B,</p>
                        <p style={{ width: '75%', margin: 'auto'}}>50010, Ames, IA, United States</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Info</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={listItemStyle}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        +1 (515) 708 8355
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={listItemStyle}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        khairi.norizan@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                {/* <ListItem>
                                    <ListItemContent style={listItemStyle}>
                                        <i className="fa fa-instagram" aria-hidden="true"/>
                                        @lamestagrammer
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={listItemStyle}>
                                        <i className="fa fa-twitter-square" aria-hidden="true"/>
                                        @sayNoM0fam
                                    </ListItemContent>
                                </ListItem> */}
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

const listItemStyle = {
    fontSize: '25px',
    fontFamily: 'Anton',
    color: '#fff'
}

export default Contact