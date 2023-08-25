
const Pagination = ({currentPage, setCurrentPage, endIndex, capsules})=> {
    return (
        <div className="mt-4 mb-[20px] flex justify-center">
            <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            >
            Previous
            </button>
            <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={endIndex >= capsules.length}
            >
            Next
            </button>
        </div>
    )
}

export default Pagination;