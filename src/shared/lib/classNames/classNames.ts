type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {

	return [
		cls,
		...additional.filter(Boolean),
		// eslint-disable-next-line no-unsafe-optional-chaining
		...Object.entries(mods)?.filter(
			// eslint-disable-next-line
			([_, value]) => Boolean(value)).map(([key]) => key),
	].join(' ').trim();
};