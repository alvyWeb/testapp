export function removeDuplicateTypes(statsArray) {
  const uniqueTypes = new Set();
  const result = [];

  for (const stat of statsArray) {
    if (!uniqueTypes.has(stat.type)) {
      result.push(stat);
      uniqueTypes.add(stat.type);
    }
  }

  return result;
}
