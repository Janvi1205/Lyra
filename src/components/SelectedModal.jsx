const SelectedModal = ({isOpen, onClose, shade}) => {
    if(!isOpen) return null;
    
    return(
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl">
                <button onClick={onClose} className="mb-4 px-4 py-2 bg-red-500 text-white rounded">
                    Close
                </button>
                <h1 className="text-2xl">Modal is working!</h1>
                <p>{shade.colorname}</p>
            </div>
        </div>
    )
}
export default SelectedModal;