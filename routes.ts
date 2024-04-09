import { routes } from "./lib/routes";

/**
 * An array of routes that are accesible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged users to /dashboard
 * @type {string[]}
 */
export const authRoutes = [routes.LOGIN, routes.REGISTER];

/**
 * The prefix for API authentication routes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = routes.DASHBOARD;
