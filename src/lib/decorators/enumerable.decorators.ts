export function Enumerable(status: boolean) {
  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {
    descriptor.enumerable = status;
  };
}
