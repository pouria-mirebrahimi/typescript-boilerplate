export function Deprecated(message: string) {
  return (_target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalDef = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`Warning: method ${key}() is deprecated. ${message}`);
      return originalDef.apply(this, args);
    };
    return descriptor;
  };
}
