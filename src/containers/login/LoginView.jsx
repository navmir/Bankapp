import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import './login.scss'

const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    }
});

function InputField(props) {
    return <Grid item xs={12}>
        <TextField
            label={props.label}
            fullWidth
            onChange={props.valueChanged}
            value={props.value} />
    </Grid>
}
const LoginView = (props) => {
    const classes = props.classes
    return (
        <div className="login-form">
            <CssBaseline />
            <Paper className={classes.paper}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h4" align="center">
                            Logga in
                        </Typography>
                    </Grid>
                    <InputField valueChanged={props.ssnChanged}
                        label="Personnummer"
                        value={props.ssn} />
                    <InputField valueChanged={props.passwordChanged}
                        label="Lösenord"
                        value={props.password} />
                    <Grid item xs={12}>
                        <Button onClick={props.onClick} variant="contained" color="primary" component="span">
                            ANGE
                        </Button>
                        <br />
                        <br />
                        <Link to="/registrera">
                            <Typography variant="h6" align="left">
                                Inget konto? Registrera här
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default withStyles(styles)(LoginView);