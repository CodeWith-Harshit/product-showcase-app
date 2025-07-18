import './Pagination.css'


function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={currentPage === i + 1 ? "active-page" : "inactive-page"}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
export default Pagination