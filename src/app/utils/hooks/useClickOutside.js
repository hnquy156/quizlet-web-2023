import { useEffect } from 'react';

const useClickOutside = (ref, clickOutsideCb, clickInsideCb) => {
  useEffect(() => {
    const onClickOutside = (e) => {
      const isClickInsideElement = ref?.current?.contains(e.target);
      if (isClickInsideElement) {
        if (clickInsideCb) clickInsideCb(e);
      } else if (clickOutsideCb) {
        clickOutsideCb(e);
      }
    };

    document.addEventListener('click', onClickOutside);

    return () => document.removeEventListener('click', onClickOutside);
  }, [ref, clickOutsideCb, clickInsideCb]);
};

export default useClickOutside;
