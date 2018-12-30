import React from 'react';
import { allHardwareCategories } from '../models/rope';
import Select from './Select';

const categorySuggestions = allHardwareCategories.map(category => ({
  value: category,
  label: category,
}));

const CategorySelect = () => (
  <Select suggestions={categorySuggestions} placeholder="Select a category" />
);

export default CategorySelect;
