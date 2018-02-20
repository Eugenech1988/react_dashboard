export const hasClass = (element, cls) => {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
};

export const getUserPositionApi = (options) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

export const detectPhone = () => {
  const viewportWidth = window.innerWidth;
  return (viewportWidth > 767);
};
