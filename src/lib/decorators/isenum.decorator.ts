export function IsEnum(values: string[]) {
  return (target: any, key: string) => {
    let currentValue = target[key];

    Object.defineProperty(target, key, {
      set: (newValue: string) => {
        if (!values.includes(newValue)) throw new Error(`${key} is invalid.`);
        currentValue = newValue;
      },
      get: () => currentValue,
    });
  };
}
