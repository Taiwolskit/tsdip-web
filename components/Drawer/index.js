import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Link from 'next/link';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import BusinessIcon from '@material-ui/icons/Business';
import EventIcon from '@material-ui/icons/Event';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';

import { withTranslation } from '../../i18n';

import Profile from '../Profile';
import Event from '../Event';
import Organization from '../Organization';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  brand: {
    cursor: 'pointer',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const renderSwitch = (param) => {
  switch (param) {
    case 1:
      return <Event />;
    case 2:
      return <Organization />;
    case 0:
    default:
      return <Profile />;
  }
};

const MiniDrawer = ({ t, sidebarItems }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => setSelectedIndex(index);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        position='fixed'
      >
        <Toolbar>
          <IconButton
            aria-label='open drawer'
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
            color='inherit'
            edge='start'
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Link href='/'>
            <Typography className={classes.brand} variant='h6' noWrap>
              {t('tsdip-full')}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      <Drawer
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        variant='permanent'
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        <Divider />

        <List component='nav' aria-label='profile events organization'>
          {sidebarItems.map(({ ariaLabel, icon, text }, key) => (
            <Tooltip
              aria-label={ariaLabel}
              arrow
              key={text}
              placement='bottom-start'
              title={t(text)}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <ListItem
                button
                onClick={(event) => handleListItemClick(event, key)}
                selected={selectedIndex === key}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={t(text)} />
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {renderSwitch(selectedIndex)}
      </main>
    </div>
  );
};

MiniDrawer.defaultProps = {
  sidebarItems: [
    {
      ariaLabel: 'User profile',
      icon: <PersonIcon />,
      text: 'drawer:item-profile',
    },
    {
      ariaLabel: 'Manage event',
      icon: <EventIcon />,
      text: 'drawer:item-event',
    },
    {
      ariaLabel: 'Manage organization',
      icon: <BusinessIcon />,
      text: 'drawer:item-org',
    },
  ],
};

MiniDrawer.propTypes = {
  t: PropTypes.func.isRequired,
  sidebarItems: PropTypes.arrayOf(
    PropTypes.shape({
      ariaLabel: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default withTranslation(['common', 'drawer'])(MiniDrawer);
