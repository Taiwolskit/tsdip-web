import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { withTranslation } from '../../../../i18n';
import styles from './Step1.module.scss';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const defaultTheme = createMuiTheme();

Object.assign(defaultTheme, {
  overrides: {
    MUIRichTextEditor: {
      container: {
        border: '5px solid gray',
        borderRadius: '5px',
        height: '-webkit-fill-available',
        padding: '5px',
      },
      toolbar: {
        borderBottom: '1px solid gray',
        display: 'flex',
        justifyContent: 'space-around',
      },
    },
  },
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

const Step1 = ({ setStepData, stepData, t }) => {
  const [name, setName] = useState(stepData.name);
  const [description, setDescription] = useState(stepData.description);

  const handleChange = (value) => {
    stepData.description = value;
    setDescription(value);
    setStepData(stepData);
  };

  return (
    <div>
      <Typography align='center' variant='h4'>
        {t('edit-org-step1-title')}
      </Typography>
      <TextField
        className={styles['edit-org-step1-org-name']}
        fullWidth
        label={t('edit-org-step1-input-name')}
        variant='outlined'
        value={name}
        onChange={(event) => {
          event.preventDefault();
          stepData.name = event.target.value;
          setName(event.target.value);
          setStepData(stepData);
        }}
      />
      <QuillNoSSRWrapper
        modules={modules}
        value={description}
        onChange={handleChange}
        formats={formats}
        theme='snow'
      />
    </div>
  );
};

Step1.propTypes = {
  setStepData: PropTypes.func.isRequired,
  stepData: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('edit-org')(Step1);
