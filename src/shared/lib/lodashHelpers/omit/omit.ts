export const omit = <T, K extends keyof T> (obj: T, keys: K | K[]) => {
	if (!obj || !keys) {
		return obj;
	}

	return Object.entries(obj).reduce((modifyObj, [key, value]) => {
		if (typeof keys === 'string' && keys === key) {
			return modifyObj;
		} else if (Array.isArray(keys) && keys.includes(key as K)) {
			return modifyObj;
		}

		return {
			...modifyObj,
			[key]: value,
		};
	}, {});
};