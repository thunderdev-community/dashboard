import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Picture from './picture';
import Description from './description'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center'
    },
  }),
);

export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Picture/>
      <Description/>
    </div>
  );
}