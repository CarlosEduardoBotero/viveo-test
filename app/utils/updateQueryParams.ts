export const updateQueryParams = (
  searchParamsEntries: IterableIterator<[string, string]>,
  keyTobeChanged: string,
  valueTobeChanged: string
) => {
  const searchParams = new URLSearchParams(Array.from(searchParamsEntries));

  if (searchParams.has(keyTobeChanged)) {
    searchParams.set(keyTobeChanged, valueTobeChanged);
  } else {
    searchParams.append(keyTobeChanged, valueTobeChanged);
  }
  const updatedQueryParams = searchParams.toString();

  return updatedQueryParams;
};
