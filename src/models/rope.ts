export type Manufacturer =
  | 'Sterling'
  | 'Teufelberger'
  | 'Yale Cordage'
  | 'Samson'
  | 'Courant'
  | 'Edelweiss';

export const allManufacturers: Array<Manufacturer> = [
  'Sterling',
  'Teufelberger',
  'Yale Cordage',
  'Samson',
  'Courant',
  'Edelweiss',
];

export type IntendedUse =
  | 'Climbing'
  | 'Special'
  | 'Access'
  | 'Dynamic Rigging'
  | 'Hitch Cord'
  | 'Static Rigging'
  | 'Cork Line'
  | 'Dynamic';

export type Certification =
  | 'EN1891A'
  | 'EN1891B'
  | 'ANSI Z133'
  | 'NFPA1983:2012'
  | 'EN892 HALF';

export const allCertifications: Array<Certification> = [
  'EN1891A',
  'EN1891B',
  'ANSI Z133',
  'NFPA1983:2012',
  'EN892 HALF',
];

export type Construction =
  | 'Double Braid'
  | 'Parallel Core'
  | 'Core Dependent'
  | '16 Strand';

export type HardwareCategory =
  | 'Connectors [open]'
  | 'Connectors [fixed]'
  | 'Rope devices'
  | 'Swivels';

export const allHardwareCategories: Array<HardwareCategory> = [
  'Connectors [open]',
  'Connectors [fixed]',
  'Rope devices',
  'Swivels',
];

export type Rope = {
  name: string;
  manufacturer: Manufacturer;
  intendedUse?: IntendedUse;
  diameterInMillimetres: number;
  diameterInInches?: string; // TODO - remove this and calculate it from millimetres?
  certifications: Array<Certification>;
  construction?: Construction;
  strandCount?: number;
  core?: string;
  cover?: string;
  mbsInKilo?: number;
  weightInGramsPerMetre?: number;
  specificGravity?: number;
  elongationPercentage?: number;
  notes?: string;
  imageUrl?: string;
};
