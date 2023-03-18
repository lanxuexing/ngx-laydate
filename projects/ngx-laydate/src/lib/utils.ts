/**
 * Convert data-bound value (usually a string) to a boolean value by force
 * @param value true or false
 */
export function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

/**
 * Convert data-bound value (usually a string) to a number value by force
 * @param value number
 */
export function coerceNumberProperty(value: any): number;
export function coerceNumberProperty<D>(value: any, fallback: D): number | D;
export function coerceNumberProperty(value: any, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}

/**
 * Determines whether the provided value is considered a number.
 * @param value The input value
 */
export function _isNumberValue(value: any): boolean {
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value));
}

/**
 * Compatibility with CommonJS and ES modules for strict-typing enforcement
 * https://medium.com/lacolaco-blog/angular-dynamic-importing-large-libraries-8ec079603d0
 * @param importPromise 
 * @returns
 */
export async function normalizeCommonJSImport<T>(importPromise: Promise<T>): Promise<T> {
  const m = await importPromise as any; // `module.exports` in CommonJS is wrapped as `default` in ESModules.
  return (m.default || m) as T;
}