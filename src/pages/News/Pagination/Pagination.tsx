import './Pagination.css'

interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }

const Pagination = ({currentPage, totalPages, onPageChange}: Props) => {

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      {pageNumbers.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}

{/* <>
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item disabled">
                <span className="page-link">Previous</span>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item" aria-current="page">
                <span className="page-link">2</span>
                </li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </> */}

export default Pagination