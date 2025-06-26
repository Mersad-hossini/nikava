import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];

  const showPages = Math.min(totalPages, 5);
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + showPages - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center my-5 rtl">
      <nav className="flex gap-1 bg-white rounded-2xl shadow-md px-4 py-2 border border-gray-200">
        <button
          className={`px-3 py-1 text-sm rounded-xl transition hover:bg-gray-100 select-none ${
            currentPage === 1
              ? "text-gray-300"
              : "text-gray-500 cursor-pointer"
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          قبلی
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 text-sm rounded-xl transition ${
              page === currentPage
                ? "bg-gray-900 text-white font-semibold shadow cursor-default"
                : "text-gray-700 hover:bg-gray-100 cursor-pointer"
            }`}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <span className="px-3 py-1 text-sm text-gray-400 select-none">...</span>
        )}

        <button
          className={`px-3 py-1 text-sm rounded-xl transition hover:bg-gray-100 select-none ${
            currentPage === totalPages
              ? "text-gray-300"
              : "text-gray-500 cursor-pointer"
          }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          بعدی
        </button>
      </nav>
    </div>
  );
};

export default Pagination;