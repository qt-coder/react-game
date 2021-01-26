import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Employee(employee) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{backgroundColor: '#a3e3f0'}}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {employee.type}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Cost: ${employee.cost}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Gain: ${employee.gain}/s
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Current Amount: {employee.webDevAmount}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{
            if (employee.points >= employee.cost) {
                employee.setWebDevAmount(employee.webDevAmount + 1)
                employee.setPoints(employee.points-employee.cost)
            } else {
                alert(`You don't have anough money to hire a ${employee.type}`)
            }
        }} variant="contained" color="secondary">Hire</Button>
      </CardActions>
    </Card>
  );
}