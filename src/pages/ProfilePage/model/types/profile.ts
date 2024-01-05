import { Country, Currency } from 'shared/const/common';

export interface Profile {
  first: string;
  last: string;
  age: number;
  currency: Currency;
  city: Country;
  username: string;
  avatar:string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}