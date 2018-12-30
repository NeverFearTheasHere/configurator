import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Input from '@material-ui/core/Input';
import { Theme } from '@material-ui/core/styles';
import withStyles, { ClassNameMap } from '@material-ui/core/styles/withStyles';
import ManufacturerSelect from './ManufacturerSelect';
import CategorySelect from './CategorySelect';
import CertificationSelect from './CertificationSelect';
import MaterialSelect from './MaterialSelect';

const styles = (theme: Theme) => ({
  heading: {
    fontWeight: theme.typography.fontWeightRegular,
  },
});

type Props = {
  classes: Partial<ClassNameMap>;
};

const HardwareFilterOptions: React.SFC<Props> = ({ classes }: Props) => (
  <>
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
        <CategorySelect />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>MBS [kN]</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Input
          fullWidth
          type="number"
          placeholder="Minimum breaking strain [kN]"
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Diameter Range [mm]</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Input type="number" placeholder="Min [mm]" />
        <Input type="number" placeholder="Max [mm]" />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Certification</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <CertificationSelect />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Material</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <MaterialSelect />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </>
);

export default withStyles(styles)(HardwareFilterOptions);
