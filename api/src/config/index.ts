import { getEnv } from "../common/utils";

const appConfig = () => ({
	PORT: getEnv("PORT"),
	BASE_PATH: getEnv("BASE_PATH"),
	NODE_ENV: getEnv("NODE_ENV"),
	APP_ORIGIN: getEnv("APP_ORIGIN"),
	DB: {
		PORT: getEnv("DB_PORT"),
		HOST: getEnv("DB_HOST"),
		NAME: getEnv("DB_NAME"),
		USER: getEnv("DB_USER"),
		PASSWORD: getEnv("DB_PASSWORD"),
	},
	JWT: {
		SECRET: getEnv("JWT_SECRET"),
		EXPIRATION: getEnv("JWT_EXPIRATION"),
		REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET"),
		REFRESH_EXPIRATION: getEnv("JWT_REFRESH_EXPIRATION"),
	},
});

export const config = appConfig();
