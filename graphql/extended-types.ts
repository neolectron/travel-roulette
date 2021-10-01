import type { Country, Continent } from './types';

export type CountryEx = Country & { kind: 'country' };
export type ContinentEx = Continent & { kind: 'continent' };
export type Zone = CountryEx | ContinentEx;
