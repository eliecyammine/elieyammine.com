'use strict';

/**
 * This is used to verify if the current Website is running on a Development Environment
 */
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

/**
 * The `localStorage` key to store the theme choice of `next-themes`
 *
 * This is what allows us to store user preference for theming
 */
export const THEME_STORAGE_KEY = 'theme';
