import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import InfoRouteCardStyles from './InfoRouteCardStyles.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MapComponent from '../Map/MapComponent.js';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function InfoRouteCard(props) {
    const classes = InfoRouteCardStyles();

    const route= {
        origin: props.data.origin,
        destination: props.data.destination,
        commonRoute: props.data.commonRoute
    }

    return (
        <Dialog fullScreen open={props.open} onClose={props.onClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                <IconButton edge="start" color="inherit" onClick={props.onClose} aria-label="close">
                    <ArrowBackIosIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Route details
                </Typography>
                </Toolbar>
            </AppBar>
            <MapComponent route={route}
                location={{ 
                    latLng: {lat: route.origin.lat, lng: route.origin.lng},
                    name: "Escuela Colombiana de Ingeniería Julio Garavito"
                }}/>
        </Dialog>
    );
}