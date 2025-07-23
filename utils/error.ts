// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (err: any) => {
  const { response } = err;
  if (response) {
    const { data, status } = response;
    if (data) {
      return {
        statusCode: err?.statusCode ?? status,
        message: data.message ?? 'An error occurred.',
      };
    }
  }
  return {
    statusCode: err?.statusCode ?? 500,
    message: err.message ?? 'An error occurred.',
  };
};
