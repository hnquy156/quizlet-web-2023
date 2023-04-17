const FOLDERS = Array.from(Array(10).keys()).map((_, index) => {
  return {
    name: 'Folder name ' + index,
    length: 23,
  };
});

export const fetchFolders = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: FOLDERS,
      });
    }, 1000);
  });
};
