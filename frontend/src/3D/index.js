import React from 'react';
import './styles.scss';

export default class ThreeD extends React.Component {
    render(){
        return(
            <div className="ThreeD-wrapper">
                <div className="intro-card">
                    <p>Welcome to LabStream 3D. </p>
                    <a href='/'>home</a>
                </div>
            </div>
        );
    }
}