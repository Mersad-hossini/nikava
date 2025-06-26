import { useMemo } from "react";

export function usePagination<T>(
  items: T[],
  currentPage: number,
  itemsPerPage: number
) {
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = useMemo(() => {
    return items.slice(startIndex, endIndex);
  }, [items, startIndex, endIndex]);

  return { currentItems, totalPages };
}