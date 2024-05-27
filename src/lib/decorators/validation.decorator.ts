export function ValidateArguments(target: any): any {
  const original = target;
  function newConstructor(...args: any[]) {
    for (const arg of args) {
      if (typeof arg !== 'string' || arg === '') {
        throw new Error('Invalid argument: expected a non-empty string');
      }
    }

    const instance = new original(...args);
    return instance;
  }

  newConstructor.prototype = original.prototype;
  return newConstructor;
}
