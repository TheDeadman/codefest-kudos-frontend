import React from 'react';
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



const feedbackData = [
  { name: 'Steve Smith', feedback: 'Thanks for your tech blog submission!'},
  { name: 'John Doe', feedback: 'Appreciate your leadership in steering the team in the right direction.'},
  { name: 'Will Page', feedback: 'Really grateful for all your help in getting me setup!'}
];

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      {feedbackData.map((feedback) => (
        <p>
          <Card className={classes.root} >
            <CardContent>
              <Typography variant="body2" component="p">
                {feedback.feedback}
              </Typography>
              <Typography variant="body2" align="right">
                - {feedback.name}
              </Typography>
            </CardContent>
          </Card>
        </p>
      ))}
    </>
  )
}


