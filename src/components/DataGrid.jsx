import Pagination from "./Pagination";
import { useState } from "react";

import { format } from 'date-fns';

const DataGrid = ({capsules, handleClickedItem, search})=> {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const filteredCapsules = capsules.filter(item => {
        const itemOriginalLaunch = format(new Date(item.original_launch), 'yyyy-MM-dd');

        if (search.status && item.status !== search.status) {
          return false;
        }
        if (search.originalLaunch && itemOriginalLaunch !== search.originalLaunch) {
          return false;
        }
        if (search.type && item.type !== search.type) {
          return false;
        }
        return true;
      });

    const displayedData = filteredCapsules.slice(startIndex, endIndex);


    return (
        <>
            <section className="py-[20px] mb-[20px] justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] px-[20px]">

                {displayedData.map((item, index)=> {
                  const formattedLaunchDate = format(new Date(item.original_launch), 'yyyy-MM-dd');

                    return (
                        <div key={index} onClick={()=> handleClickedItem(item)} className="p-4 border rounded shadow cursor-pointer hover:bg-gray-100 ">
                            <h3 className="text-lg font-semibold">{item.capsule_id}</h3>
                            <p>Status: {item.status}</p>
                            <p>Type: {item.type}</p>
                            <p>Original Launch: {formattedLaunchDate}</p>
                        </div>
                    )
                })}
            </section>

            <Pagination endIndex={endIndex} capsules={capsules} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}

export default DataGrid;