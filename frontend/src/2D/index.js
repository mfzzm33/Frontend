import React from 'react';
import './styles.scss';
import { Paper, Slider, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2'

export default class TwoD extends React.Component {
    state = {
        angle1: 0,
        angle2: 0,
        angle3: 0,
        angle3Input: "0",
    }
    handleAngle3sliderUpdate = (value) => {
        this.setState({ angle3: value })
        this.setState({ angle3Input: "" + value })
    }
    handleAngle3textUpdate = (value) => {
        this.setState({ angle3Input: value })
        const numeric = parseInt(value);
        console.log("setting angle3 to " + value);
        this.setState({ angle3: parseInt(value) })
    }
    Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));
    render() {
        const Item = this.Item;
        return (
            <div className="TwoD-wrapper">
                <Grid container spacing={2}>
                    <Grid size={3}>
                        <div className="intro-card">
                            <p>Welcome to LabStream 2D.</p>
                            <a href='/'>home</a>
                        </div>
                    </Grid>
                    <Grid size={9}>
                        {/* Empty div to fill line */}
                        <div />
                    </Grid>
                    <Grid size={3}>
                        <Item>
                            <span>Webcam live feed</span>

                            <img src="/AllPurposeFiller.jpg" style={{ width: '80%', height: 'auto', objectFit: 'cover' }} />
                        </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item><img src="/ThorLabsKit.png" style={{ width: '80%', height: 'auto', objectFit: 'cover' }} /></Item>
                    </Grid>
                    <Grid size={3}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Item>Options

                                <Typography textAlign='left' style={{ marginLeft: 3 }} >Turbo encabulator</Typography>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, width: '100%' }}>
                                    <Slider
                                        valueLabelDisplay="on"
                                        value={this.state.angle1}
                                        onChange={(event, value) => this.setState({ angle1: value })}
                                        min={-90}
                                        max={90}
                                    />
                                </div>
                                <Typography textAlign='left' style={{ marginLeft: 3 }} >Prefabulated alumnite</Typography>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, width: '80%' }}>
                                    <Slider
                                        value={this.state.angle2}
                                        onChange={(event, value) => this.setState({ angle2: value })}
                                        min={-90}
                                        max={90}
                                    />
                                    <Typography style={{ marginLeft: 20 }}>{this.state.angle2}</Typography>
                                </div>
                                <Typography textAlign='left' style={{ marginLeft: 3 }} >Pentametric fan</Typography>
                                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, width: '100%', gap: 5 }}>
                                    <Slider
                                        value={this.state.angle3}
                                        onChange={(event, value) => this.handleAngle3sliderUpdate(value)}
                                        min={-90}
                                        max={90}
                                    />
                                    <TextField
                                        size="small"
                                        value={this.state.angle3Input}
                                        onChange={(event) => this.handleAngle3textUpdate(event.target.value)}
                                        sx={{ width: 80 }}
                                        inputProps={{ style: { textAlign: 'right' } }}
                                    />
                                </div>
                            </Item>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}