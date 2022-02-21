import { useEffect, useState } from 'react';

const usePageTitle = (initialTitle?: string) => {
  const [pageTitle, setPageTitle] = useState(initialTitle);

  useEffect(() => {
    document.title = `그라듀 ${initialTitle ? '| ' + initialTitle : ''}`;
  }, [pageTitle]);

  return { setPageTitle };
};

export default usePageTitle;
