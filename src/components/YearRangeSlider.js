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
    value: 1990,
    label: '1990',
  },
  {
    value: 2019,
    label: '2019',
  },
];

function valuetext(value) {
  return `${value}`;
}


export default function YearRangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([10, 34]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
       Year
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        marks={marks}
        min={1990}
        max={2019}
      />

    </div>
  );
}
