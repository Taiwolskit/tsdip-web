import React from 'react';
import Link from 'next/link';
import MUIRichTextEditor from 'mui-rte';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';

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

const useStyles = makeStyles((theme) => ({
  root: {
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
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const stepList = [
  {
    title: 'Edit the event',
    description: "Edit the event's description.",
  },
  {
    title: 'Event extra information',
    description:
      'Add the event extra information, such as social media link...',
    skip: true,
  },
  {
    title: 'Save the event data',
    description: 'Make sure you want to save this change.',
  },
];

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

const EditStep = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

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

  const rednerDiv = (step) => {
    let component = undefined;
    switch (step) {
      case 0:
        component = <p>VV</p>;
        break;
      case 1:
        component = (
          <MuiThemeProvider theme={defaultTheme}>
            <MUIRichTextEditor
              defaultValue={JSON.stringify(fakeData)}
              inlineToolbar={true}
              label='sss'
              onSave={(...data) => console.log(JSON.stringify(data))}
            />
          </MuiThemeProvider>
        );
        break;
      default:
        component = <p>cccccc</p>;
        break;
    }
    return component;
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
              <Typography variant='caption'>Optional</Typography>
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

      <div>
        <Typography className={classes.instructions}>
          {stepList[activeStep].description}
        </Typography>
        <div>
          <Link href='/dashboard'>
            <Button variant='contained' startIcon={<CancelIcon />}>
              Cancel
            </Button>
          </Link>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            Back
          </Button>

          {stepList[activeStep].skip && (
            <Button
              variant='contained'
              color='primary'
              onClick={handleSkip}
              className={classes.button}
            >
              Skip
            </Button>
          )}

          <Button
            variant='contained'
            color='primary'
            onClick={handleNext}
            className={classes.button}
          >
            {activeStep === stepList.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>

      {rednerDiv(activeStep)}
    </div>
  );
};

export default EditStep;
