import { format } from 'date-fns';

const PopUp = ({ selectedItem, onClose }) => {
  const formattedLaunchDate = format(new Date(selectedItem.original_launch), 'yyyy-MM-dd');
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 ">
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg font-semibold">{selectedItem.capsule_id}</h2>
          <p>Status: {selectedItem.status}</p>
          <p>Type: {selectedItem.type}</p>
          <p>Original Launch: {formattedLaunchDate}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default PopUp;  