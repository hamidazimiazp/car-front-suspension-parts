const reactQueryConfigs = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
      gcTime: 60 * 1000,
    },
  },
};

export default reactQueryConfigs;
