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
    value: 1,
    label: '1',
  },
  {
    value: 10,
    label: '10',
  },
];

function valuetext(value) {
  return `${value}`;
}



export default function RatingRangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([2, 7]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <Typography id="range-slider" gutterBottom>
       Rating
      </Typography>
      <Slider
      onChange={handleChange}
        valueLabelDisplay="on"
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="range-slider"
        value={value}

        marks={marks}
        min={1}
        max={10}
      />

    </div>
  );
}

