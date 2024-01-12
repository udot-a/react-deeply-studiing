import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileValidatesErrors = (state: StateSchema) => state.profile?.validateErrors;