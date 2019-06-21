import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    margin: '0 auto',
    width: '80px'
  },
});


export default function SearchButton() {
  const classes = useStyles();

  return(
      <Button variant="outlined" color="inherit" className={classes.button} >
        Search
      </Button>

  )
}
