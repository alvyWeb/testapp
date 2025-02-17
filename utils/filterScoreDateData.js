export const filterScoreDateData = (isArray, data, selectDate) => {
  if (isArray) {
    return data?.match?.filter((d) => d["@date"] === selectDate);
  } else {
    if (data?.match["@date"] === selectDate) {
      return [data?.match];
    }
  }
};
