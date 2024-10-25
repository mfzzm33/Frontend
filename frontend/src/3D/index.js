import React from 'react';
import BoxModel from './models/BoxModel'
import OneBoxModel from './models/OneBoxModel'
import './styles.scss';

export default class ThreeD extends React.Component {
    state = {
        selectedModel: '',
    }
    selectModel = (modelName) => {
        console.log("selected ", modelName, " model");
        this.setState({ selectedModel: modelName });
    };

    render() {
        const modelMap = {
            'boxes': <BoxModel />,
            'box': <OneBoxModel />,
        }
        return (
            <div className="ThreeD-wrapper">
                <div className="intro-card">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <p>Welcome to LabStream 3D. Select a model to view.</p>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                            <button onClick={() => this.selectModel('box')}>box</button>
                            <button onClick={() => this.selectModel('boxes')}>boxes</button>
                        </div>
                        <a href='/'>home</a>
                    </div>
                </div>
                {
                    this.state.selectedModel == 'boxes' ?
                        (<BoxModel />)
                        :
                        this.state.selectedModel == 'box' ?
                        (<OneBoxModel />)
                        :
                        null
                }
            </div>
        );
    }
}