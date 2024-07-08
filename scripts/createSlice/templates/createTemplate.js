// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs/promises');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const resolveRoot = require('../resolveRoot');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createModel = require('./createModel');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createUI = require('./createUI');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createPublicApi = require('./createPublicApi');

// eslint-disable-next-line no-undef
module.exports = async (layer, sliceName) => {
	try {
		await fs.mkdir(resolveRoot('src', layer, sliceName));
	} catch (e) {
		console.log(`не удалось создать директорию для слайса${sliceName}`);
	}

	await createModel(layer, sliceName);
	await createUI(layer, sliceName);
	await createPublicApi(layer, sliceName);
};
