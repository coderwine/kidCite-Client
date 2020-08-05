import React, { useState } from 'react';
import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AddCircleIcon from '@material-ui/icons/AddCircle';  //Add Kid & Quote
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles, SwipeableDrawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer(props) {

  // console.log(props)

  const classes = useStyles();
  const [state, setState] = useState({
    bottom: false
  });
  const [sessionToken, setSessionToken] = useState('null')

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {sessionToken === null ?


        <List>

          <ListItem button key='Login' onClick={tempSwitch}>
            <ListItemText primary='Login' />
            <ListItemIcon><PersonIcon/></ListItemIcon>
          </ListItem>
          <ListItem button key='Signup' onClick={tempSwitch}>
            <ListItemText primary='Signup' />
            <ListItemIcon><PersonAddIcon/></ListItemIcon>
          </ListItem>


        </List>
        :
        <List>

          <ListItem button key='Logout' onClick={clearToken}>
            <ListItemText primary='Logout' />
            <ListItemIcon><PowerSettingsNewIcon color="secondary"/></ListItemIcon>
          </ListItem>
          <Divider/>
          <ListItem button key='Profile'>
            <ListItemText primary='Profile' />
            <ListItemIcon><AccountCircleIcon color="primary"/></ListItemIcon>
          </ListItem>

        </List>
      }
    </div>
  );

  const menuDisplay = () => {
    return sessionToken != null ? <AccountCircleIcon style={{fontSize: 65}} color="primary"/> : <PowerSettingsNewIcon style={{fontSize: 65}} color="primary"/>
  }

  //!THIS IS A TEMP FUNCTION JUST TO SWITCH TO AN ACTIVE SESSION TOKEN 
  const tempSwitch = () => {
    setSessionToken('sessionTokenHasBeenSetSoThatItSamplesAnActualToken')
  }

  const clearToken = () => {
    setSessionToken(null)
  }

  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}> {menuDisplay()} </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}


//! NOTES
/*
May use Avatar components within Material-UI for each kid and user
*/