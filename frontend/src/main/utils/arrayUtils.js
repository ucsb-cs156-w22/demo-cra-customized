import { arrayMin, arrayMax } from "main/utils/minMax";

const getFirstSmallestLargest = (list, mapper) => {
  const first = mapper(list[0]);
  const smallest = arrayMin(list.map(mapper));
  const largest = arrayMax(list.map(mapper));
  return { first, smallest, largest };
};

export { getFirstSmallestLargest };
