import React from 'react';
import Select from './Select';

const materialSuggestions = ['Nylon', 'Polyester'].map(material => ({
  value: material,
  label: material,
}));

const MaterialSelect = () => (
  <Select
    isMulti
    suggestions={materialSuggestions}
    placeholder="Select one or more materials"
  />
);

export default MaterialSelect;
