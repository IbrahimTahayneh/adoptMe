import { ENVIRONMENT } from "./constants";

const { DEVELOPMENT, STAGING, PRODUCTION } = ENVIRONMENT;

const PETFINDER_API_STAGING = {
  API_KEY: "4FUgKWrey1zJUQvR87TKey7S43akuU6IqE0PEA6xjP9lNg8G8g",
  API_URL_STAGING: "https://api.petfinder.com/v2",
};

const PETFINDER_API_PRODUCTION = {
  API_KEY: "4FUgKWrey1zJUQvR87TKey7S43akuU6IqE0PEA6xjP9lNg8G8g",
  API_URL_STAGING: "https://api.petfinder.com/v2",
};

export default (() => {
  switch (process.env.ENV) {
    case DEVELOPMENT:
      return {
        API_URL_AUI: PETFINDER_API_STAGING.API_URL_STAGING,
        API_KEY: PETFINDER_API_STAGING.API_KEY,
        ENV: DEVELOPMENT,
      };
    case STAGING:
      return {
        API_URL_AUI: PETFINDER_API_STAGING.API_URL_STAGING,
        API_KEY: PETFINDER_API_STAGING.API_KEY,
        ENV: STAGING,
      };
    case PRODUCTION:
      return {
        API_URL_AUI: PETFINDER_API_PRODUCTION.API_URL_STAGING,
        API_KEY: PETFINDER_API_PRODUCTION.API_KEY,
        ENV: PRODUCTION,
      };
  }
})();
