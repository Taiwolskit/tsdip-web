import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';

import { withTranslation } from '../../../i18n';
import styles from './EditStep.module.scss';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

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

const renderDiv = (step) => {
  let component = undefined;
  switch (step) {
    case 0:
      component = <Step1 />;
      break;
    case 1:
      component = <Step2 />;
      break;
    case 2:
      component = <Step3 />;
      break;
    default:
      component = <p>Empty</p>;
  }
  return component;
};

const EditStep = ({ t }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

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

    if (activeStep === stepList.length - 1) {
      setActiveStep(0);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  return (
    <div className={classes.root}>
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
            variant='contained'
            startIcon={<CancelIcon />}
          >
            {t('edit-org-actions-cancel')}
          </Button>
        </Link>

        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant='contained'
          className={classes.button}
        >
          {t('edit-org-actions-back')}
        </Button>

        {stepList[activeStep].skip && (
          <Button
            variant='contained'
            color='primary'
            onClick={handleSkip}
            className={classes.button}
          >
            {t('edit-org-actions-skip')}
          </Button>
        )}

        <Button
          variant='contained'
          color='primary'
          onClick={handleNext}
          className={classes.button}
        >
          {activeStep === stepList.length - 1
            ? t('edit-org-actions-finish')
            : t('edit-org-actions-next')}
        </Button>
      </div>

      <div className={styles['edit-org-step-block']}>
        {renderDiv(activeStep)}
      </div>
    </div>
  );
};

EditStep.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('edit-org')(EditStep);
