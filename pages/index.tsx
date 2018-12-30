import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Router from 'next/router';
import SearchBar from '../src/components/SearchBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HardwareFilterOptions from '../src/components/HardwareFilterOptions';
import Typography from '@material-ui/core/Typography';

type Props = {
  classes: Partial<ClassNameMap>;
};

type State = {
  selectedTab: 'hardware' | 'textiles' | 'other';
};

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
  },
  tabs: {
    color: theme.palette.primary.main,
  },
  buttonRow: {
    margin: '20px',
    display: 'flex',
    'justify-content': 'center',
  },
  button: {
    color: theme.palette.primary.main,
    background: theme.palette.secondary.light,
  },
});

class IndexPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedTab: 'hardware',
    };
  }

  onTabChange = (_: React.ChangeEvent<{}>, value: any) => {
    this.setState({ selectedTab: value });
  };

  render() {
    const { classes } = this.props;
    const { selectedTab } = this.state;
    return (
      <div className={classes.root}>
        <SearchBar />
        <Tabs
          fullWidth
          className={classes.tabs}
          value={selectedTab}
          onChange={this.onTabChange}
        >
          <Tab label="Hardware" value="hardware" />
          <Tab label="Textiles" value="textiles" />
          <Tab label="Other" value="other" />
        </Tabs>
        {selectedTab === 'hardware' && <HardwareFilterOptions />}
        {selectedTab === 'textiles' && (
          <Typography align="center">
            Filter options for textile items will go here
          </Typography>
        )}
        {selectedTab === 'other' && (
          <Typography align="center">
            Filter options for other items will go here
          </Typography>
        )}
        <div className={classes.buttonRow}>
          <Button
            variant="contained"
            size="large"
            className={classes.button}
            onClick={() => Router.push('/results')}
          >
            Configure
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(IndexPage);
