import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import ReactProj from './ReactProject';
import JavaProj from './JavaProject';
import CProj from './CProject';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0}
    }

    toggleCategories() {
        //React
        if(this.state.activeTab === 0){
            return(
                <ReactProj/>            
            )
        //Java
        }else if(this.state.activeTab === 1){
            return(
                <JavaProj/>
            )
        //C/C++
        }else if(this.state.activeTab === 2){
            return(
                <CProj/>
            )
        }
    }

    render() {
        return(
            <div className="content">
                <Tabs className="tab-style" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>C/C++</Tab>
                </Tabs>

                <div>
                    {this.toggleCategories()}
                </div>
            </div>
            
        );
    }
}

export default Project