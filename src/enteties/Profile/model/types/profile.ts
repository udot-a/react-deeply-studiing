import { Currency } from 'enteties/Currency';
import { Country } from 'enteties/Country/model/types/country';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER ERROR',
}
export interface Profile {
  id?: string;
  first?: string;
  last?: string;
  age?: number;
  currency?: Currency;
  city?: string;
  country?: Country;
  username?: string;
  avatar?:string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}