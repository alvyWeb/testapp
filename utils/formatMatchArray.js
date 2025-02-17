export const formatMatchArray = (data) => {
  const isArray = Array.isArray(data);
  if (isArray) {
    return data ? data : [];
  } else {
    return data ? [data] : [];
  }
};
