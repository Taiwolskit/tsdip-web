import React from 'react';
import Link from 'next/link';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer id='footer' className={styles['footer']}>
    <Container>
      <Grid container>
        <Grid container item xs={3} justify='space-evenly'>
          <IconButton
            className={styles['social-icon-warpper']}
            aria-label='facebook link'>
            <FacebookIcon />
          </IconButton>
        </Grid>

        <Grid container item xs={3} justify='space-evenly'>
          <IconButton
            className={styles['social-icon-warpper']}
            aria-label='facebook link'>
            <TwitterIcon />
          </IconButton>
        </Grid>

        <Grid container item xs={3} justify='space-evenly'>
          <IconButton
            className={styles['social-icon-warpper']}
            aria-label='facebook link'>
            <InstagramIcon />
          </IconButton>
        </Grid>

        <Grid container item xs={3} justify='space-evenly'>
          <IconButton
            className={styles['social-icon-warpper']}
            aria-label='facebook link'>
            <YouTubeIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
    <Divider className={styles['footer-divider']} variant='middle' />

    <Container>
      <Grid container>
        <Grid container item xs={12} sm={3} justify='space-evenly'>
          <Link href='https://taiwolskit.com'>
            <Typography>
              Copyright &copy;{new Date().getFullYear()} | All rights reserved.
              Powered by
              <a href='https://taiwolskit.com'>Taiwolskit</a>
            </Typography>
          </Link>
        </Grid>

        <Grid container item xs={4} sm={3} justify='space-evenly'>
          <Link href='/'>
            <Typography>
              <a href='/'>Sitemap</a>
            </Typography>
          </Link>
        </Grid>

        <Grid container item xs={4} sm={3} justify='space-evenly'>
          <Link href='/'>
            <Typography>
              <a href='/'>Terms of Use</a>
            </Typography>
          </Link>
        </Grid>

        <Grid container item xs={4} sm={3} justify='space-evenly'>
          <Link href='/'>
            <Typography>
              <a href='/'>Private Policy</a>
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  </footer>
);

export default Footer;
