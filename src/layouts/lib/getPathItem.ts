export const getPathItem = (pathname: string, index = 2): string => {
  const paths = pathname.split('/');
  return paths.at(index) ?? '';
};
