
const SearchForm = ()=> {
    return (
        <>
            <form className="px-[20px]">
                <div className="mb-[10px] w-full ">
                    <input type="text" placeholder="Search item" className="p-[15px] border-[2px] border-[#333] text-[18px] text-[#000] outline-0 rounded-[8px] w-[100%] " />
                </div>
                <button className="bg-[#333] text-[#fff] rounded-[8px] px-[20px] py-[15px] w-[100%] text-[18px] font-[600]">Search</button>
            </form>
        </>
    )
}

export default SearchForm;