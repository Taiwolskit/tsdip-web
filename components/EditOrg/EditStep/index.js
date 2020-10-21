import React, { useContext, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';

import { ContextStore } from '../../../ctx';
import { withTranslation } from '../../../i18n';
import axios from '../../../lib/axios';
import styles from './EditStep.module.scss';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '20px',
    width: '100%',
  },
  wrapper: {
    border: '5px solid white',
    borderRadius: '10px',
  },
  button: {
    margin: theme.spacing(1),
  },
  instructions: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));

const renderDiv = (step, stepData, setStepData, setActiveStep) => {
  let component = undefined;
  switch (step) {
    case 0:
      component = <Step1 stepData={stepData} setStepData={setStepData} />;
      break;
    case 1:
      component = (
        <Step2
          stepData={stepData}
          setStepData={setStepData}
          setActiveStep={setActiveStep}
        />
      );
      break;
    case 2:
      component = <Step3 stepData={stepData} />;
      break;
    default:
      component = <p>Empty</p>;
  }
  return component;
};

const initialStepData = {
  name: '',
  description: '',
  social: {
    address: '',
    email: '',
    fanPage: '',
    instagram: '',
    line: '',
    telephone: '',
    website: '',
    youtube: '',
  },
};

const submitOrg = (headers) => {
  const {
    data: {
      data: {
        access_token: accessToken = '',
        refresh_token: refreshToken = '',
      },
    },
  } = await axios.post('/organizations',
    {
      name,
      description,
      org_type,
      social
    },
    {
      headers
    }
  );
};


const EditStep = ({ t }) => {
  const { accessToken } = useContext(ContextStore);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'X-API-TOKEN': process.env.NEXT_PUBLIC_ADMIN_API_KEY,
  };

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [stepData, setStepData] = useState(initialStepData);
  const [openState, setOpen] = useState(false);

  const stepList = [
    {
      title: t('edit-org-step1-title'),
      description: t('edit-org-step1-desc'),
    },
    {
      title: t('edit-org-step2-title'),
      description: t('edit-org-step2-desc'),
      skip: true,
    },
    {
      title: t('edit-org-step3-title'),
      description: t('edit-org-step3-desc'),
    },
  ];

  const handleNext = () => {
    let newSkipped = skipped;
    if (skipped.has(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (!stepData.name || !stepData.description) {
      showAlert();
      return;
    }

    if (activeStep === stepList.length - 1) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
    if (openState) closeAlert();
  };

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const closeAlert = () => setOpen(false);
  const showAlert = () => setOpen(true);

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openState}
        autoHideDuration={6000}
      >
        <Alert severity='error' onClose={closeAlert}>
          This is a success message!
        </Alert>
      </Snackbar>

      <Stepper
        activeStep={activeStep}
        alternativeLabel
        className={classes.wrapper}
      >
        {stepList.map((data, index) => {
          const stepProps = {};
          const labelProps = {};
          if (data.skip) {
            labelProps.optional = (
              <Typography variant='caption'>
                {t('edit-org-step2-subtitle')}
              </Typography>
            );
          }
          if (skipped.has(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={data.title} {...stepProps}>
              <StepButton {...labelProps}>{data.title}</StepButton>
            </Step>
          );
        })}
      </Stepper>

      <Typography className={classes.instructions}>
        {stepList[activeStep].description}
      </Typography>

      <div className={styles['edit-org-actions']}>
        <Link href='/dashboard'>
          <Button
            className={classes.button}
            startIcon={<CancelIcon />}
            variant='contained'
          >
            {t('edit-org-actions-cancel')}
          </Button>
        </Link>

        <Button
          className={classes.button}
          disabled={activeStep === 0}
          onClick={handleBack}
          variant='contained'
        >
          {t('edit-org-actions-back')}
        </Button>

        {stepList[activeStep].skip && (
          <Button
            className={classes.button}
            color='primary'
            onClick={handleSkip}
            variant='contained'
          >
            {t('edit-org-actions-skip')}
          </Button>
        )}

        <Button
          className={classes.button}
          color='primary'
          onClick={handleNext}
          variant='contained'
        >
          {activeStep === stepList.length - 1
            ? t('edit-org-actions-finish')
            : t('edit-org-actions-next')}
        </Button>
      </div>

      <div className={styles['edit-org-step-block']}>
        {renderDiv(activeStep, stepData, setStepData, setActiveStep)}
      </div>
    </div>
  );
};

EditStep.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('edit-org')(EditStep);
