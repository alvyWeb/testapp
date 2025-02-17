export const filterScoreData = (isArray, data, status) => {
  if (isArray) {
    return data?.match?.filter((d) => d["@status"] === status);
  } else {
    if (data?.match["@status"] === status) {
      return [data?.match];
    }
  }
};
