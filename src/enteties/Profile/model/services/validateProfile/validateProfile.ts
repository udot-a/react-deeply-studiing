import { Profile } from '../../types/profile';
import { ValidateProfileError } from '../../consts/consts';

export const validateProfile = (profile?: Profile): ValidateProfileError[] => {
	const errors: ValidateProfileError[] = [];

	if (!profile) {
		errors.push(ValidateProfileError.NO_DATA);
	}

	const { first, last, country, age } = profile as Profile;

	if (!first || !last) {
		errors.push(ValidateProfileError.INCORRECT_USER_DATA);
	}

	if (!age || !Number.isInteger(age)) {
		errors.push(ValidateProfileError.INCORRECT_AGE);
	}

	if (!country) {
		errors.push(ValidateProfileError.INCORRECT_COUNTRY);
	}

	return errors;
};
