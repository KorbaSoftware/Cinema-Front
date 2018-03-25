import React, { Component } from 'react';
import logo from '../assets/svg/conference-hall.svg';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>test test test</h1>
                <img src = {require('../assets/svg/conference-hall.svg')} alt = "cinema-svg"/>
            </div>
        );
    }
}

export default Home;