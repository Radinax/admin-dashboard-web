export const camelCaseToNormalCase = (string: string) => {
  return string.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });
};
