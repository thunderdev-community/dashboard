import React from 'react';
import './App.css';
import TabPanel from './components/tabs/index.tsx';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import 'tachyons';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display:'flex',
      justifyContent: 'flex-start',
      width: '100%'
    },
  }),
);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    
    <TabPanel>

    </TabPanel>
    
    </div>
  );
}

export default App;
