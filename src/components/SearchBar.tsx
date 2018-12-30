import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';

const SearchBar = () => (
  <Toolbar>
    <Input
      startAdornment={<SearchIcon />}
      fullWidth
      disableUnderline
      placeholder="Search..."
      onChange={({ target }) =>
        console.log('Tried to search for value: ', target.value.trim())
      }
    />
  </Toolbar>
);
export default SearchBar;
