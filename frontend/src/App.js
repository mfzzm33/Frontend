import React from 'react';
import { useState } from 'react';
import {NavBar} from './Navbar';
import './App.scss';
import { Paper, Slider, TextField, Typography, Stack, Switch } from '@mui/material'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2'
import ThreeD from './3D';

function App() {
	const [sliderInput, handleSliderUpdate] = useState({
        angle1: 0,
        angle2: 0,
        angle3: 0,
        angle3Input: "0",
    });
	const [is3D, switchDimensions] = useState(false)

    const handleAngle3sliderUpdate = (value) => {
        handleSliderUpdate({ ...sliderInput, angle3: value, angle3Input: "" + value })
    }
    const handleAngle3textUpdate = (value) => {
        handleSliderUpdate({ ...sliderInput, angle3Input: value, angle3: parseInt(value) })
        console.log("setting angle3 to " + value);
    }
	const handleSwitch = () => {
		switchDimensions(!is3D)
	}

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

	return (
		<div className="TwoD-wrapper">

			<Grid container spacing={2}>
				<Grid size={12}>
				</Grid>
				
				<Grid size={9}>
					<Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
						<Typography>3D</Typography>
						<Switch checked={is3D} onChange={handleSwitch}/>
						<Typography>2D</Typography>
					</Stack>
					{is3D ? <Item><img src="/ThorLabsKit.png" style={{ width: '80%', height: 'auto', objectFit: 'cover' }} /></Item> : 
					<ThreeD></ThreeD>}
					
				</Grid>
				<Grid size={3}>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<Item>Options

							<Typography textAlign='left' style={{ marginLeft: 3 }} >Turbo encabulator</Typography>
							<div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, width: '100%' }}>
								{/* onChange={(event, value) => handleSliderUpdate({ angle1: value })} */} 
								<Slider
									valueLabelDisplay="on"
									value={sliderInput.angle1}
									onChange={(event, value) => handleSliderUpdate({...sliderInput, angle1: value })}
									min={-90}
									max={90}
								/>
							</div>
							<Typography textAlign='left' style={{ marginLeft: 3 }} >Prefabulated alumnite</Typography>
							<div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, width: '80%' }}>
								<Slider
									value={sliderInput.angle2}
									onChange={(event, value) => handleSliderUpdate({...sliderInput, angle2: value })}
									min={-90}
									max={90}
								/>
								<Typography style={{ marginLeft: 20 }}>{sliderInput.angle2}</Typography>
							</div>
							<Typography textAlign='left' style={{ marginLeft: 3 }} >Pentametric fan</Typography>
							<div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, width: '100%', gap: 5 }}>
								<Slider
									value={sliderInput.angle3}
									onChange={(event, value) => handleAngle3sliderUpdate(value)}
									min={-90}
									max={90}
								/>
								<TextField
									size="small"
									value={sliderInput.angle3Input}
									onChange={(event) => handleAngle3textUpdate(event.target.value)}
									sx={{ width: 80 }}
									inputProps={{ style: { textAlign: 'right' } }}
								/>
							</div>
						</Item>
					</div>
				</Grid>
				<Grid size={9}>
					<Item>
						<span>Webcam live feed</span>
						<img src="/AllPurposeFiller.jpg" style={{ width: '80%', height: 'auto', objectFit: 'cover' }} />
					</Item>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
