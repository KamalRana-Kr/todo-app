export const PUBLIC_APIS = [
  '/api/auth/login',
  '/api/auth/signup'
];

export const HTTP_STATUS_CODES = {
  CREATED: 201,
  OK: 200,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

export const AUTH_MESSAGES = {
  USER_REGISTERED_SUCCESS: 'User registered successfully',
  USER_LOGGED_IN_SUCCESS: 'User logged in successfully',
  AUTH_TOKEN_MISSING_OR_INVALID: 'Authentication token missing or invalid',
  UNAUTHORIZED_USER: 'Unauthorized user',
  USER_DEACTIVATED: 'User is deactivated',
  INVALID_OR_EXPIRED_TOKEN: 'Invalid or expired token',
};

export const AUTH_ERROR_MESSAGES = {
  EMAIL_ALREADY_REGISTERED: 'Email already registered',
  INVALID_EMAIL_OR_PASSWORD: 'Invalid email or password',
};

export const TODO_MESSAGES = {};
