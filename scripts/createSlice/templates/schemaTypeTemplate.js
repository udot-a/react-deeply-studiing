// eslint-disable-next-line @typescript-eslint/no-var-requires
const firstCharUpperCase = require('../firstCharUpperCase');

// eslint-disable-next-line no-undef
module.exports = (sliceName) => `export interface ${firstCharUpperCase(sliceName)}Schema {
    
}`;
