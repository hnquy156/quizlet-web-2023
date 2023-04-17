const STUDY_SETS = Array.from(Array(10).keys()).map((_, index) => {
  return {
    name: 'Study set name ' + index,
    length: 35,
    username: 'QuyHoang15',
    avatar: 'https://mui.com/static/images/avatar/2.jpg',
  };
});

export const fetchStudySets = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: STUDY_SETS,
      });
    }, 400);
  });
};
