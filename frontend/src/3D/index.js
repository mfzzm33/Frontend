import React from 'react';
import BoxModel from './models/BoxModel'
import OneBoxModel from './models/OneBoxModel'
import STLModel from './models/STLModel'
import ThorLabs from './models/ThorLabs'
import MultiModel from './models/MultiModel'
import PlanarGrid from './models/Grid';
import './styles.scss';

export default class ThreeD extends React.Component {
    state = {
        selectedModel: <div/>,
    }
    selectModel = (model) => {
        this.setState({ selectedModel: model });
    };

    render() {
        const modelMap = {
            'None': <div />,
            'boxes': <BoxModel />,
            'box': <OneBoxModel />,
            'STL': <STLModel />,
            'ThorLabs': <ThorLabs />,
            'MultiModel': <MultiModel />,
            'PlanarGrid': <PlanarGrid />
        }
        return (
            <div className="ThreeD-wrapper">
                <div className="intro-card">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <p>Welcome to LabStream 3D. Select a model to view.</p>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                            {Object.entries(modelMap).map(([key, value]) => (
                                <button onClick={() => this.selectModel(value)}>{key}</button>
                            ))}
                        </div>
                        <a href='/'>home</a>
                    </div>
                </div>
                {
                    // Display the selected model
                    this.state.selectedModel
                }
            </div>
        );
    }
}