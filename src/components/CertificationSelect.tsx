import React from 'react';
import { allCertifications } from '../models/rope';
import Select from './Select';

const certificationSuggestions = allCertifications.map(certification => ({
  value: certification,
  label: certification,
}));

const CertificationSelect = () => (
  <Select
    isMulti
    suggestions={certificationSuggestions}
    placeholder="Select one or more certifications"
  />
);

export default CertificationSelect;
