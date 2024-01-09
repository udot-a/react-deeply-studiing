type Mods = Record<string, boolean | string | undefined>;

export const classNames = (cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string => {

	return [
		cls,
		...additional.filter(Boolean),
		// eslint-disable-next-line no-unsafe-optional-chaining
		...Object.entries(mods)?.filter(
			// eslint-disable-next-line
			([_, value]) => Boolean(value)).map(([key]) => key),
	].join(' ').trim();
};