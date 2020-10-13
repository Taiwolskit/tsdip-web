import React, { useContext } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
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
import AssignmentIcon from '@material-ui/icons/Assignment';
import BusinessIcon from '@material-ui/icons/Business';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EventIcon from '@material-ui/icons/Event';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';

import { ContextStore } from '../../ctx';
import { withTranslation } from '../../i18n';

import Event from '../Event';
import Organization from '../Organization';
import Profile from '../Profile';
import RequestLog from '../RequestLog';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  brand: {
    cursor: 'pointer',
  },
  appBar: {
    transition: theme.transitions.create(['width', 'margin'], {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.sharp,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    width: drawerWidth,
  },
  drawerOpen: {
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.sharp,
    }),
    width: drawerWidth,
  },
  drawerClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    alignItems: 'center',
    display: 'flex',
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

const renderSwitch = (index, userType) => {
  if (userType === 'user') {
    switch (index) {
      case 2:
        return <Event />;
      case 1:
        return <Organization />;
      case 0:
      default:
        return <Profile />;
    }
  } else if (userType === 'manager') {
    switch (index) {
      case 3:
        return <Event />;
      case 2:
        return <Organization />;
      case 1:
        return <RequestLog />;
      case 0:
      default:
        return <Profile />;
    }
  }
};

const MiniDrawer = ({ t, sidebarItems }) => {
  const { user } = useContext(ContextStore);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => setSelectedIndex(index);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  if (user.type === 'manager') {
    sidebarItems = [
      {
        ariaLabel: 'User profile',
        icon: <PersonIcon />,
        text: 'drawer:item-profile',
      },
      {
        ariaLabel: 'Request list',
        icon: <AssignmentIcon />,
        text: 'drawer:item-request-log',
      },
      {
        ariaLabel: 'Manage organization',
        icon: <BusinessIcon />,
        text: 'drawer:item-org',
      },
      {
        ariaLabel: 'Manage event',
        icon: <EventIcon />,
        text: 'drawer:item-event',
      },
    ];
  }

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

        <List aria-label='profile events organization' component='nav'>
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
        {renderSwitch(selectedIndex, user.type)}
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
      ariaLabel: 'Manage organization',
      icon: <BusinessIcon />,
      text: 'drawer:item-org',
    },
    {
      ariaLabel: 'Manage event',
      icon: <EventIcon />,
      text: 'drawer:item-event',
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
