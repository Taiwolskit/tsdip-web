import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';

import { withTranslation } from '../../../i18n';
import styles from './EditStep.module.scss';

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
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));

const EditStep = ({ t }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

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
    setActiveStep((prevActiveStep) => ++prevActiveStep);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => --prevActiveStep);
  };

  const handleSkip = () => {
    setActiveStep((prevActiveStep) => ++prevActiveStep);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const stepList = [
    {
      title: t('edit-event-step1-title'),
      description: t('edit-event-step1-desc'),
    },
    {
      title: t('edit-event-step2-title'),
      description: t('edit-event-step2-desc'),
      skip: true,
    },
    {
      title: t('edit-event-step3-title'),
      description: t('edit-event-step3-desc'),
    },
  ];

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
                {t('edit-event-step2-subtitle')}
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

      <div className={styles['edit-event-actions']}>
        <Link href='/dashboard'>
          <Button
            className={classes.button}
            startIcon={<CancelIcon />}
            variant='contained'
          >
            {t('edit-event-actions-cancel')}
          </Button>
        </Link>

        <Button
          className={classes.button}
          disabled={activeStep === 0}
          onClick={handleBack}
          variant='contained'
        >
          {t('edit-event-actions-back')}
        </Button>

        {stepList[activeStep].skip && (
          <Button
            className={classes.button}
            color='primary'
            onClick={handleSkip}
            variant='contained'
          >
            {t('edit-event-actions-skip')}
          </Button>
        )}

        <Button
          className={classes.button}
          color='primary'
          onClick={handleNext}
          variant='contained'
        >
          {activeStep === stepList.length - 1
            ? t('edit-event-actions-finish')
            : t('edit-event-actions-next')}
        </Button>
      </div>

      {/* {renderDiv(activeStep)} */}
    </div>
  );
};

EditStep.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('edit-event')(EditStep);
