export const routes = [
  {
    name: 'AmpsView',
    loader: (compName?: string) =>
      import('@avam/amps-console').then((module) => ({
        default: module.default,
      })),
  },
];
