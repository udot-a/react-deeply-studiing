import { Currency } from 'enteties/Currency';
import { Country } from 'enteties/Country/model/types/country';
import { ValidateProfileError } from '../consts/consts';

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
