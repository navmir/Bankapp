import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import './start.scss'

const StartView = (props) => {
    return <div className="start-form">
        <CssBaseline />
        <div className="house-logo">
            <Link to="/ansokan">
                <Button className="btn-apply" variant="contained" color="primary" component="span">
                    Gör en lånelöftesansökan
                </Button>
            </Link>
        </div >
    </div >
}

export default StartView;