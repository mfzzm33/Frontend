import React from 'react';
import './styles.scss';

export default class TwoD extends React.Component {
    render() {
        return (
            <div className="TwoD-wrapper">
                <div className="intro-card">
                    <p>Welcome to LabStream 2D.</p>
                    <a href='/'>home</a>
                </div>
            </div>
        );
    }
}