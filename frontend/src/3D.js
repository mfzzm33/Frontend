import React from 'react';
import { useState } from 'react';
import BoxModel from './models/BoxModel'
import OneBoxModel from './models/OneBoxModel'
import STLModel from './models/STLModel'
import ThorLabs from './models/ThorLabs'
import MultiModel from './models/MultiModel'
import PlanarGrid from './models/Grid';

function ThreeD() {
    const [selectedModel, selectModelType] = useState(<div/>)

    const selectModel = (model) => {
        selectModelType(model);
    };

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
                            <button onClick={() => selectModel(value)}>{key}</button>
                        ))}
                    </div>
                </div>
            </div>
            {
                // Display the selected model
                selectedModel
            }
        </div>
    );
}

export default ThreeD