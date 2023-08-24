
const SearchForm = ()=> {
    return (
        <>
            <form className="px-[20px] lg:flex lg:gap-[10px] lg:items-center mb-[20px]">
                <div className="mb-[10px] lg:mb-0 w-full lg:w-[300px] ">
                    <input type="text" placeholder="Search item" className="p-[15px] border-[2px] border-[#333] text-[18px] text-[#000] outline-0 rounded-[8px] w-[100%] " />
                </div>
                <div className="mb-[10px] lg:mb-0 w-full lg:w-[300px] ">
                    <input type="text" placeholder="Search item" className="p-[15px] border-[2px] border-[#333] text-[18px] text-[#000] outline-0 rounded-[8px] w-[100%] " />
                </div>

                <div className="mb-[10px] lg:mb-0 w-full lg:w-[300px] ">
                    <input type="text" placeholder="Search item" className="p-[15px] border-[2px] border-[#333] text-[18px] text-[#000] outline-0 rounded-[8px] w-[100%] " />
                </div>
                <button className="bg-[#333] text-[#fff] rounded-[8px] p-[15px] w-[100%] lg:w-[200px] text-[18px] font-[600]">Search</button>
            </form>
        </>
    )
}

export default SearchForm;