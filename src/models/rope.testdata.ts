import { Rope } from './rope';

export const testRope1: Rope = {
  name: 'Japora',
  manufacturer: 'Courant',
  intendedUse: 'Climbing',
  diameterInMillimetres: 11.5,
  diameterInInches: '7/16',
  certifications: ['EN1891A'],
  construction: 'Double Braid',
  strandCount: 24,
  core: 'Nylon',
  cover: 'Polyester',
  mbsInKilo: 2500,
  weightInGramsPerMetre: 93,
  elongationPercentage: 3.5,
};

export const testRope2: Rope = {
  name: 'HP DURA PACIFICMASTER CORK LINE (FL)',
  manufacturer: 'Samson',
  intendedUse: 'Cork Line',
  diameterInMillimetres: 12,
  diameterInInches: '1/2',
  certifications: [],
  construction: 'Parallel Core',
  strandCount: 20,
  core: 'Polyester',
  cover: 'Polyproylene/Nylon blend',
  mbsInKilo: 3357,
  weightInGramsPerMetre: 383,
  elongationPercentage: 1,
};

export const testRope3: Rope = {
  name: 'Comes',
  manufacturer: 'Teufelberger',
  intendedUse: 'Access',
  diameterInMillimetres: 11,
  diameterInInches: '7/16',
  certifications: ['EN1891A'],
  construction: 'Parallel Core',
  strandCount: 32,
  core: 'Nylon',
  cover: 'Polyester',
  mbsInKilo: 3500,
  weightInGramsPerMetre: 82,
  elongationPercentage: 2.5,
};

export const testRope4: Rope = {
  name: 'Scion',
  manufacturer: 'Sterling',
  intendedUse: 'Climbing',
  diameterInMillimetres: 11.5,
  diameterInInches: '7/16',
  certifications: ['EN1891A', 'ANSI Z133'],
  construction: 'Double Braid',
  strandCount: 24,
  core: 'Nylon',
  cover: 'Polyester',
  mbsInKilo: 2410,
  weightInGramsPerMetre: 90,
  elongationPercentage: 4,
  notes: 'Intermediate cover',
};

export const testRope5: Rope = {
  name: 'Extrem 2',
  manufacturer: 'Edelweiss',
  intendedUse: 'Dynamic',
  diameterInMillimetres: 9,
  diameterInInches: '3/8',
  certifications: ['EN892 HALF'],
  construction: 'Parallel Core',
  core: 'Nylon',
  cover: 'Nylon',
  weightInGramsPerMetre: 52,
  elongationPercentage: 11,
};

export const testRope6: Rope = {
  name: 'Kernmaster',
  manufacturer: 'Yale Cordage',
  diameterInMillimetres: 11,
  certifications: ['EN1891A'],
};
export const testRope7: Rope = {
  name: 'KM3 MAX',
  imageUrl:
    'https://www.teufelberger.com/pub/media/catalog/product/cache/2/image/700x700/e9c3970ab036de70892d86c6d221abfe/k/m/km-iii-max-schwarz-gelb-core-shot_1.jpg',
  manufacturer: 'Teufelberger',
  diameterInMillimetres: 10,
  certifications: ['EN1891B'],
};
export const testRope8: Rope = {
  name: 'Sirius Bull Rope',
  imageUrl:
    'https://www.teufelberger.com/pub/media/catalog/product/cache/2/image/700x700/e9c3970ab036de70892d86c6d221abfe/s/i/sirius-bull-rope.jpg',
  manufacturer: 'Teufelberger',
  diameterInMillimetres: 14,
  certifications: [],
};

export const testRopes = [
  testRope1,
  testRope2,
  testRope3,
  testRope4,
  testRope5,
  testRope6,
  testRope7,
  testRope8,
];
