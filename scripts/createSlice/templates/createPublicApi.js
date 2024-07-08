// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs/promises');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const resolveRoot = require('../resolveRoot');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const firstCharUpperCase = require('../firstCharUpperCase');

// eslint-disable-next-line no-undef
module.exports = async (layer, sliceName) => {
	const componentName = firstCharUpperCase(sliceName);
	const schemaName = `${sliceName}Schema`;

	try {
		await fs.writeFile(
			resolveRoot('src', layer, sliceName, 'index.ts'),
			`export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';`,
		);
	} catch (e) {
		console.log('Не удалось создать PUBLIC API');
	}
};
