const PopUp = ({ selectedItem, onClose }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 ">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">{selectedItem.capsule_id}</h2>
          <p>Status: {selectedItem.status}</p>
          <p>Original Launch: {selectedItem.original_launch}</p>
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