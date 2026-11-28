export class BuildError extends Error {
  constructor(code, message) { super(message); this.name = 'BuildError'; this.code = code; }
}
export function requireCondition(condition, code, message) {
  if (!condition) throw new BuildError(code, message);
}
export function warning(code, message) { return {severity: 'warning', code, message}; }
