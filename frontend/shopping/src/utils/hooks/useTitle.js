import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - جلوبندی سورنا`;
  }, [title]);
};

export default useTitle;
