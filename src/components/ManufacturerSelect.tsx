import React from 'react';
import { allManufacturers } from '../models/rope';
import Select from './Select';

const manufacturerSuggestions = allManufacturers.map(manufacturer => ({
  value: manufacturer,
  label: manufacturer,
}));

const ManufacturerSelect = () => (
  <Select
    isMulti
    suggestions={manufacturerSuggestions}
    placeholder="Select one or more manufacturers"
  />
);

export default ManufacturerSelect;
