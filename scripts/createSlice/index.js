// eslint-disable-next-line @typescript-eslint/no-var-requires
const createTemplate = require('./templates/createTemplate');

// eslint-disable-next-line no-undef
const layer = process.argv[2];
// eslint-disable-next-line no-undef
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
	throw new Error(`Укажите слой ${layers.join(' или ')}`);
}

if (!sliceName) {
	throw new Error('Укажите название слайса');
}

createTemplate(layer, sliceName);
