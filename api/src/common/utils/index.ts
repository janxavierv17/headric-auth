export const getEnv = (key: string, defaultValue = ""): string => {
	const value = process.env[key];
	if (value === undefined) {
		if (defaultValue) return "defaultValue";

		throw new Error(`The ${key} for an environment variable does not exist.`);
	}

	return value;
};
