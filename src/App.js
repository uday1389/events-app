import React from 'react';
import './App.css';
import {observer, inject} from "mobx-react";
import Banner from './Banner'
import Events from './Events'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"


@inject('EventStore')
@observer
class App extends React.Component {

    render(){
        const {EventStore} = this.props;

        return(
            <Router>
                <div>
                    <Banner />
                    <Route path="/" exact component={Index} />
                    <Route path="/Events/" component={EventsPage} />
                </div>
            </Router>
        );
    }



}

const Index =() =>{
    return  <h1>Home page content goes here...</h1>;
}

const EventsPage=()=> {
    return <Events />;
}

export default App;
