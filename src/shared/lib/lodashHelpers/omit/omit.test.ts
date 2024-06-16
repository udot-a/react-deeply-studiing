// eslint-disable-next-line udot-project-plugin/path-checker
import { omit } from 'shared/lib/lodashHelpers';

const testObj = {
	name: 'Andrii',
	surname: 'Udot',
	age: 17,
	city: 'Kharkiv',
};

describe('omit.test', () => {
	test('Should be object with surname, name and city fields', () => {
		expect(omit(testObj, ['name', 'age'])).toEqual({
			surname: 'Udot',
			city: 'Kharkiv',
		});
	});
	test('Should be object with surname and city fields', () => {
		expect(omit(testObj, 'age')).toEqual({
			surname: 'Udot',
			city: 'Kharkiv',
			name: 'Andrii',
		});
	});
});
