import { useState } from "react";

const SearchForm = ({search, setSearch})=> {
    const [status, setStatus] = useState('');
    const [originalLaunch, setOriginalLaunch] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (event)=> {
        event.preventDefault();
        setSearch({status, originalLaunch, type});

        setStatus('');
        setOriginalLaunch('');
        setType('');
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-[400px] mx-auto p-[10px] bg-[#fff] rounded-[4px] shadow-md">
            <label htmlFor="status" className="block mb-[5px] font-semibold text-gray-700">Status:</label>
            <select
                id="status"
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-[2px] focus:border-[#007bff]"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="">--Select--</option>
                <option value="active">Active</option>
                <option value="unknown">Unknown</option>
                <option value="retired">Retired</option>
                <option value="destroyed">Destroyed</option>
            </select>

            <label htmlFor="original-launch" className="block mt-4 mb-[5px] font-semibold text-gray-700">Original Launch:</label>
            <input
                id="original-launch"
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-[2px] focus:border-[#007bff]"
                type="text"
                value={originalLaunch}
                onChange={(e) => setOriginalLaunch(e.target.value)}
            />

            <label htmlFor="type" className="block mt-4 mb-[5px] font-semibold text-gray-700">Type:</label>
            <input
                id="type"
                className={`w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-[2px] focus:border-[#007bff]`}
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />

            <button type="submit" className="mt-4 w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Search</button>
        </form>
    )
}

export default SearchForm;