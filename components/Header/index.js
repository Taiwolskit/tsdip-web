import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles(() => ({
  toolBar: {
    justifyContent: 'space-between',
  },
}));

const Header = ({ t, items, languages }) => {
  const classes = useStyles();
  const { accessToken, dispatch } = useContext(ContextStore);
  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event, lang) => {
    if (languages.includes(lang)) {
      i18n.changeLanguage(lang);
    }
    setAnchorEl(false);
  };

  return (
    <header id="header">
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6">
            {t('tsdip-full')}
          </Typography>

          <div className="nav-link" flexgrow={1}>
            {
              items.map(({ caption, link, tooltip }) => (
                <Tooltip
                  title={t(tooltip)}
                  key={link}
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                  aria-label="add"
                  placement="bottom-start"
                  arrow
                >
                  <Button color='inherit' href={link}>{t(caption)}</Button>
                </Tooltip>
              ))
            }

            <Tooltip
              title={t('navitem-login-tooltip')}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              aria-label="add"
              placement="bottom-start"
              arrow
            >
              <IconButton
                edge="end"
                aria-label="account setting"
                // aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>

            <Tooltip
              title={t('navitem-language-tooltip')}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              aria-label="add"
              placement="bottom-start"
              arrow
            >
              <IconButton
                edge="end"
                aria-label="language setting"
                aria-controls="lang-menu"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <LanguageIcon />
              </IconButton>
            </Tooltip>

            <Menu
              id="lang-menu"
              anchorEl={anchorEl}
              keepMounted
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              open={anchorEl}
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
    </header>
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
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      tooltip: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default withTranslation('common')(Header);
