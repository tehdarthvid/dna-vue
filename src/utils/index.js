export const { warn, error, log } = console;
export const dlog =
  // eslint-disable-next-line
  'development' === process.env.NODE_ENV ? console.log : () => {};
