import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import PortFolioRouter from './ComponentsFolder/PortFolioRouter';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="MyPortFolio" scroll>
            <Navigation>
              <Link to="/">About Me</Link>
              <Link to="/Resume">Resume</Link>
              <Link to="/MyProject">Project/Assignment</Link>
              <Link to="/Contact">Contact Info</Link>
            </Navigation>
          </Header>
          {/* <Drawer title="MyPortFolio">
            <Navigation>
              <Link to="/">About Me</Link>
              <Link to="/Resume">Resume</Link>
              <Link to="/MyProject">Project</Link>
              <Link to="/Contact">Contact Info</Link>
            </Navigation>
          </Drawer> */}
            <Content>
              <div className="page-content" />
              <PortFolioRouter/>
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
