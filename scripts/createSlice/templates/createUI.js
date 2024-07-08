// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs/promises');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const resolveRoot = require('../resolveRoot');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const firstCharUpperCase = require('../firstCharUpperCase');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const componentTemplate = require('./componentTemplate');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const storyTemplate = require('./storyTemplate');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styleTemplate = require('./styleTemplate');

// eslint-disable-next-line no-undef
module.exports = async (layer, sliceName) => {
	const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);

	const createUIDir = async () => {
		try {
			await fs.mkdir(resolveUIPath());
		} catch (e) {
			console.log('Не удалось создать UI директорию');
		}
	};

	const createComponent = async () => {
		try {
			const componentName = firstCharUpperCase(sliceName);
			await fs.mkdir(resolveUIPath(componentName));
			await fs.writeFile(
				resolveUIPath(componentName, `${componentName}.tsx`),
				componentTemplate(componentName),
			);
			await fs.writeFile(
				resolveUIPath(componentName, `${componentName}.stories.tsx`),
				storyTemplate(layer, componentName),
			);
			await fs.writeFile(
				resolveUIPath(componentName, `${componentName}.module.scss`),
				styleTemplate(componentName),
			);
		} catch (e) {
			console.log('Не удалось создать компонент');
		}
	};

	await createUIDir();
	await createComponent();
};
