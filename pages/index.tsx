import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ManufacturerSelect from '../src/components/ManufacturerSelect';

type Props = {
  classes: Partial<ClassNameMap>;
};

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const IndexPage: React.SFC<Props> = ({ classes }) => (
  <div className={classes.root}>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Manufacturer</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ManufacturerSelect />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Category</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Category select will go here</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>MBS [kN]</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Something will go here</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Diameter Range [mm]</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Something will go here</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

export default withStyles(styles)(IndexPage);
