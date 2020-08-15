import React, { useContext } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LanguageIcon from '@material-ui/icons/Language';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { ContextStore } from '../../ctx';
import { i18n, withTranslation } from '../../i18n';
import styles from './index.module.scss';

const Header = ({ t, items, languages }) => {
  const { accessToken, dispatch } = useContext(ContextStore);
  const [anchorLang, setAnchorLang] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLangMenu = (event) => {
    setAnchorLang(event.currentTarget);
  };
  const handleProfileMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch({ type: 'LOGOUT' });
  };

  const handleClose = (event, lang) => {
    if (languages.includes(lang)) {
      i18n.changeLanguage(lang);
    }
    setAnchorLang(null);
  };

  const LinkRef = React.forwardRef((props, ref) => (
    <Link ref={ref} href='/dashboard'>
      <a href='/dashboard'>Dashboard</a>
    </Link>
  ));

  return (
    <AppBar position='static'>
      <Toolbar className={`${styles['header-container']}`}>
        <Typography variant='h6'>{t('tsdip-full')}</Typography>

        <div className='nav-link' flexgrow={1}>
          {items.map(({ caption, link, tooltip }) => (
            <Tooltip
              title={t(tooltip)}
              key={link}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              aria-label='add'
              placement='bottom-start'
              arrow
            >
              <Button color='inherit' href={link}>
                {t(caption)}
              </Button>
            </Tooltip>
          ))}

          <Tooltip
            title={t('navitem-login-tooltip')}
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            aria-label='add'
            placement='bottom-start'
            arrow
          >
            {accessToken ? (
              <IconButton
                edge='end'
                aria-label='account setting'
                aria-controls='profile-menu'
                aria-haspopup='true'
                onClick={handleProfileMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <IconButton edge='end' color='inherit' href='/login'>
                <AccountCircle />
              </IconButton>
            )}
          </Tooltip>

          <Tooltip
            title={t('navitem-language-tooltip')}
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            aria-label='add'
            placement='bottom-start'
            arrow
          >
            <IconButton
              edge='end'
              aria-label='language setting'
              aria-controls='lang-menu'
              aria-haspopup='true'
              onClick={handleLangMenu}
              color='inherit'
            >
              <LanguageIcon />
            </IconButton>
          </Tooltip>

          {accessToken && (
            <Menu
              id='profile-menu'
              anchorEl={anchorEl}
              keepMounted
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleProfileClose}
            >
              <MenuItem onClick={handleProfileClose}>
                <LinkRef />
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          )}

          <Menu
            id='lang-menu'
            anchorEl={anchorLang}
            keepMounted
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={Boolean(anchorLang)}
            onClose={handleClose}
          >
            {languages.map((lang) => (
              <MenuItem
                key={lang}
                onClick={(event) => handleClose(event, lang)}
              >
                {lang}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  languages: ['en', 'zh-TW'],
  items: [
    {
      caption: 'navitem-event-caption',
      link: '/events',
      tooltip: 'navitem-event-tooltip',
    },
    {
      caption: 'navitem-studio-caption',
      link: '/studios',
      tooltip: 'navitem-studio-tooltip',
    },
    {
      caption: 'navitem-teacher-caption',
      link: '/teachers',
      tooltip: 'navitem-teacher-tooltip',
    },
  ],
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      tooltip: PropTypes.string.isRequired,
    }),
  ),
};

export default withTranslation('common')(Header);
