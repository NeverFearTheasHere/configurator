import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import ResultsList from '../src/components/ResultsList';
import { testRopes } from '../src/models/rope.testdata';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';

type Props = {
  classes: Partial<ClassNameMap>;
};

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
  },
});

const ResultsPage: React.SFC<Props> = ({ classes }) => (
  <div className={classes.root}>
    <Button onClick={Router.back}>
      <Typography>Back</Typography>
    </Button>
    <ResultsList results={testRopes} />
  </div>
);

export default withStyles(styles)(ResultsPage);
