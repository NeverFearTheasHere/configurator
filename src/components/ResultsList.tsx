import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Rope } from '../models/rope';
import { withStyles, Theme } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

type Props = {
  results: Array<Rope>;
  classes: Partial<ClassNameMap>;
};

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
  },
});

const ResultsList: React.SFC<Props> = ({ results }) => (
  <List>
    {results.map(rope => (
      <ListItem key={rope.name} divider>
        <Typography>{rope.name}</Typography>
      </ListItem>
    ))}
  </List>
);

export default withStyles(styles)(ResultsList);
