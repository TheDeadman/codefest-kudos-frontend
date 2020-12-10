import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';

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

export default function SimpleCard({feedbackData}) {
  const classes = useStyles();
  return (
    <>
      {feedbackData.map((feedback) => (
        <p>
          <Card className={classes.root} >
            <CardContent>
              <Typography variant="body2" component="p">
                {feedback.comment}
              </Typography>
              <Typography variant="body2" align="right">
                - {feedback.commenter}
              </Typography>
            </CardContent>
          </Card>
        </p>
      ))}
    </>
  )
}


