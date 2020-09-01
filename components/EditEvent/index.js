import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import MUIRichTextEditor from 'mui-rte';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';

import { withTranslation } from '../../i18n';
import EditStep from './EditStep';

const defaultTheme = createMuiTheme();

Object.assign(defaultTheme, {
  overrides: {
    MUIRichTextEditor: {
      container: {
        border: '5px solid gray',
        borderRadius: '5px',
        padding: '5px',
        height: '-webkit-fill-available',
      },
      toolbar: {
        borderBottom: '1px solid gray',
        display: 'flex',
        justifyContent: 'space-around',
      },
    },
  },
});

const fakeData = {
  blocks: [
    {
      key: '3fbbl',
      text: '測試測試',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: '31bq5',
      text: '哈囉哈囉',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
};

const EditEvent = ({ t }) => (
  <Container maxWidth='md'>
    <Typography variant='h3' gutterBottom align='center'>
      {t('edit-event-title')}
    </Typography>
    <EditStep />
    <Link href='/dashboard'>
      <Button variant='contained' startIcon={<CancelIcon />}>
        Cancel
      </Button>
    </Link>
    <MuiThemeProvider theme={defaultTheme}>
      <MUIRichTextEditor
        defaultValue={JSON.stringify(fakeData)}
        inlineToolbar={true}
        label={t('edit-event-placeholder')}
        onSave={(...data) => console.log(JSON.stringify(data))}
      />
    </MuiThemeProvider>
  </Container>
);

EditEvent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('edit-event')(EditEvent);
