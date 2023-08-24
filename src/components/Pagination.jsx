
const Pagination = ()=> {
    return (
        <section>
            <div className="mt-4 flex justify-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        //   onClick={() => setCurrentPage(currentPage - 1)}
        //   disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        //   onClick={() => setCurrentPage(currentPage + 1)}
        //   disabled={endIndex >= data.length}
        >
          Next
        </button>
      </div>
        </section>
    )
}

export default Pagination;