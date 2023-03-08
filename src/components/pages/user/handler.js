export const getCurrentTab = (pathname) => {
  const pathSegments = pathname.split('/');
  return pathSegments[pathSegments.length - 1];
};
