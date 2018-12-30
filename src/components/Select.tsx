import React from 'react';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import SingleValue from 'react-select/lib/components/SingleValue';
import { ValueType } from 'react-select/lib/types';

type SelectOption = {
  value: string;
  label: string;
};

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

const inputComponent = ({ inputRef, ...props }: any) => (
  <div ref={inputRef} {...props} />
);

const Control = (props: any) => (
  <TextField
    fullWidth
    InputProps={{
      inputComponent,
      inputProps: {
        className: props.selectProps.classes.input,
        inputRef: props.innerRef,
        children: props.children,
        ...props.innerProps,
      },
    }}
    {...props.selectProps.textFieldProps}
  />
);

const Option = (props: any) => (
  <MenuItem
    buttonRef={props.innerRef}
    selected={props.isFocused}
    component="div"
    {...props.innerProps}
  >
    {props.children}
  </MenuItem>
);

const Placeholder = (props: any) => (
  <Typography
    color="textSecondary"
    className={props.selectProps.classes.placeholder}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

const ValueContainer = (props: any) => (
  <div className={props.selectProps.classes.valueContainer}>
    {props.children}
  </div>
);

const MultiValue = (props: any) => (
  <Chip
    tabIndex={-1}
    label={props.children}
    className={classNames(props.selectProps.classes.chip, {
      [props.selectProps.classes.chipFocused]: props.isFocused,
    })}
    onDelete={props.removeProps.onClick}
    deleteIcon={<CancelIcon {...props.removeProps} />}
  />
);

const components = {
  Control,
  MultiValue,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

type Props = {
  classes: Partial<ClassNameMap>;
  suggestions: Array<SelectOption>;
  placeholder?: string;
  isMulti?: boolean;
};

type State = {
  values: ValueType<SelectOption>;
};

class MultiSelect extends React.Component<Props, State> {
  state = {
    values: null,
  };

  handleChange = (option: ValueType<SelectOption>) => {
    if (option) {
      this.setState({ values: option });
    }
  };

  render() {
    const { classes, suggestions, placeholder, isMulti } = this.props;
    return (
      <div className={classes.root}>
        <NoSsr>
          <Select<SelectOption>
            classes={classes}
            options={suggestions}
            components={components}
            value={this.state.values}
            onChange={this.handleChange}
            placeholder={placeholder}
            isMulti={isMulti}
            autoFocus
            openMenuOnFocus
            closeMenuOnSelect={false}
          />
        </NoSsr>
      </div>
    );
  }
}

export default withStyles(styles as any, { withTheme: true })(MultiSelect);
