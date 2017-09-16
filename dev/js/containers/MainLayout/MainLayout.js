import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import Avatar from 'material-ui/Avatar';

const headerLayoutStyle = require('./HeaderLayoutStyle').default;

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    minHeight: '530px',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight:'1000px'

  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '8px 8px',
    background: '#3F51B5'

  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'auto',
      marginTop: 64,
    },
  },
});

class MiniDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose(){
    this.setState({ open: false });
  }

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen.bind(this)}
                className={classNames(classes.menuButton, this.state.open && classes.hide)} >
                <MenuIcon />
              </IconButton>
              <div style={headerLayoutStyle.avatar.div}>
                  <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"
                  size={38}
                  style={headerLayoutStyle.avatar.icon}/>
              </div>

              {/*
                <Typography type="title" color="inherit" noWrap>
                  Mini variant drawer
                </Typography>

            */  }
            </Toolbar>
          </AppBar>
          <Drawer
            type="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose.bind(this)}>
                  <ChevronLeftIcon style={{color:'#ffffff'}}/>
                </IconButton>
              </div>
              <Divider />
              <List className={classes.list}>{mailFolderListItems}</List>
              <Divider />
              <List className={classes.list}>{otherMailFolderListItems}</List>
            </div>
          </Drawer>
          <main className={classes.content}>
            <Typography type="body1" noWrap>

              {this.props.children}
            </Typography>
          </main>
        </div>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default withStyles(styles)(MiniDrawer);
