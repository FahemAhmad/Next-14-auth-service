/**
 * An array of public routes
 * accessible without login
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of routes that require authentication
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for all API routes
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default route after login
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
