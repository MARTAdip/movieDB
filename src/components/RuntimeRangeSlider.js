import React from 'react';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 300,
    label: '300',
  },
];

function valuetext(value) {
  return `${value}`;
}


export default function RuntimeRangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([100, 250]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
       Runtime
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        marks={marks}
        min={0}
        max={300}
      />

    </div>
  );
}
